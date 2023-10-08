
import { BunFile } from "bun";
import { readdir } from "node:fs/promises";
import { join } from 'node:path';

//========================================================================
// FILE I/O UTILITIES
//========================================================================

async function getFiles(directoryPath: string) {
	const fileNames = await readdir( directoryPath );
	const filePaths = fileNames.map( fn => join( directoryPath, fn ) );
	return filePaths;
}

//========================================================================
// SERVER COMPONENT FILE
//========================================================================

class ServerCompomentFile {
	path: string
	file : BunFile
	text: string
	name: string
	constLines: string[]
	constVarNames: string[]
	constValueNames: string[]
	outputTypes: string
	outputProperties: string
	clientComponentText: string
	constructor(path: string) {
		this.path = path // the path of the server component file
		this.file = Bun.file(this.path) // represents the bun representation of the server component file
		this.text = '' // represents the raw text of the server component file
		this.name = '' // represents the name of the server components which should match the file name but without the extension
		this.constLines = [] // represents the raw string of all const lines in a server component file
		this.constVarNames = [] // represents all varialbe names of const declarations in server component file
		this.constValueNames = [] // represents all values of all consts declared in server component file
		this.outputTypes = '' // represents type declarations of a client component file
		this.outputProperties = '' // represents class properties of a client component file
		this.clientComponentText = ''
	}
	// gets the text out of the server component file
	extractText = async () => {
		this.text = await this.file.text()
	}
	// cuts out the return statement from the text
	removeReturnStatement = () => {
		let indexOfReturn = this.text.indexOf('return(')
		this.text = this.text.slice(0, indexOfReturn)
	}
	// sets the name from the server component file based on path name
	parseName = () => {
		const pathSegments = this.path.split('/');
		const fileNameWithExtension = pathSegments[pathSegments.length - 1];
		const fileNameWithoutExtension = fileNameWithExtension.split('.')[0];
		this.name = fileNameWithoutExtension;
	}
	// most shaky of all the methods
	// pulls out all the consts from the text contains with component files
	extractConstsFromText = () => {
		let constIndexes: number[] = []
		for (let i = 0; i < this.text.length; i++) {
			let fiveLetterScan = this.text.slice(i, i+5)
			if (fiveLetterScan == 'const') {
				constIndexes.push(i)
			}
		}
		// this part works as follows
		// we go through each const index
		// then we start iterating through all the characters after the const index
		// when we find a space, we increment the space count
		// when we find three spaces, we know we have completed the line
		// this relies heavily on the idea that we place once space between each word
		// in all our const declarations
		// not doing so will result in the loss of a meaningful element
		// this part of the code could be changes
		// however, the output of this section must result in
		// this.constLines having the text from each line containing const
		// in the target server component file
		constIndexes.forEach(index => {
			let spaceCount = 0
			for (let i = 0; i < 200; i++) {
				let currentLetter: string = this.text[index+i]
				if (currentLetter == " ") {
					spaceCount++
				}
				if(spaceCount == 3 && currentLetter == '\n') {
					spaceCount = 0
					this.constLines.push(this.text.slice(index, index+i))
					break
				}
			}
		})
	}
	// if a const line does not contain "ID" or "CLASS" then it should be removed
	washConstLines = () => {
		this.constLines = this.constLines.filter((currentLine) => {
		  return currentLine.includes('ID') || currentLine.includes('CLASS');
		});
	  }
	// no error handling has been applied to this shaky method as well
	// will robably forget exacly how it works without detailed comments
	extractConstVarNamesAndValueNames = () => {
		this.constLines.forEach(line => {
			let wordParts = line.split('=')
			let firstPart = wordParts[0]
			let secondPart = wordParts[1]
			firstPart = firstPart.replace(/\bconst\b/g, '')
			firstPart = firstPart.replace(/\s/g, '')
			secondPart = secondPart.replace(/['"]/g, '')
			secondPart = secondPart.replace(/\s/g, '')
			this.constVarNames.push(firstPart)
			this.constValueNames.push(secondPart)
		})
	}
	buildOutputTypes = () => {
		for (let i = 0; i < this.constVarNames.length; i++) {
			let currentVarName = this.constVarNames[i]
			this.outputTypes = this.outputTypes + `${currentVarName}:string;`
			if (currentVarName.includes('ID')) {
				this.outputTypes = this.outputTypes + `${currentVarName.slice(0, -2)}:Element;`
			}
		}
	}
	buildProperties = () => {
		for (let i = 0; i < this.constVarNames.length; i++) {
			let currentVarName = this.constVarNames[i]
			let currentValueName = this.constValueNames[i]
			this.outputProperties = this.outputProperties + `this.${currentVarName}='${currentValueName}';`
			// creating dom elements for all provided IDS
			if (currentVarName.includes('ID')) {
				this.outputProperties = this.outputProperties + `this.${currentVarName.slice(0, -2)}=document.getElementById('${currentValueName}') as Element;`
			}
		}
	}
	buildClientComponentText = () => {
		this.clientComponentText = `export class ${this.name}{${this.outputTypes}constructor(){${this.outputProperties}}}`
	}
	writeToClientComponent = async () => {
		let clientOutputPath = `./${this.path.replace('server', 'client')}`
		clientOutputPath = clientOutputPath.replace('.tsx', '.ts')
		let file: BunFile = Bun.file(clientOutputPath)
		if (this.outputProperties == '' && this.outputTypes == '') {
			return
		}
		Bun.write(file, this.clientComponentText)

		
	}

}


//========================================================================
// BUILD CLIENT-SIDE COMPONENTS
//========================================================================

// runs through the client components folder
// creates client classes to match server components
export const buildClientComponents = async () => {
	const serverComponentsPath: string = './src/server/component/';
	const serverComponentFiles: ServerCompomentFile[] = [];
	const paths = await getFiles(serverComponentsPath);
	for (const path of paths) {
		const serverComponentFile = new ServerCompomentFile(path);
		await serverComponentFile.extractText(); // Wait for text extraction to complete
		serverComponentFile.removeReturnStatement()
		serverComponentFile.parseName()
		serverComponentFile.extractConstsFromText()
		serverComponentFile.extractConstVarNamesAndValueNames()
		serverComponentFile.washConstLines()
		serverComponentFile.buildProperties()
		serverComponentFile.buildOutputTypes()
		serverComponentFile.buildClientComponentText()
		serverComponentFile.writeToClientComponent()
		serverComponentFiles.push(serverComponentFile);
	}

	// console.log(serverComponentFiles[0])
	
}