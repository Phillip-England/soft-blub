export class Banner{topbarID:string;topbar:Element;barsID:string;bars:Element;xID:string;x:Element;menuID:string;menu:Element;overlayID:string;overlay:Element;constructor(){this.topbarID='banner-top-bar';this.topbar=document.getElementById('banner-top-bar') as Element;this.barsID='banner-bars-icon';this.bars=document.getElementById('banner-bars-icon') as Element;this.xID='banner-x-icon';this.x=document.getElementById('banner-x-icon') as Element;this.menuID='nav-menu';this.menu=document.getElementById('nav-menu') as Element;this.overlayID='overlay';this.overlay=document.getElementById('overlay') as Element;}}