// src/client/component/Banner.ts
class Banner {
  topbarID;
  topbar;
  barsID;
  bars;
  xID;
  x;
  menuID;
  menu;
  overlayID;
  overlay;
  constructor() {
    this.topbarID = "banner-top-bar";
    this.topbar = document.getElementById("banner-top-bar");
    this.barsID = "banner-bars-icon";
    this.bars = document.getElementById("banner-bars-icon");
    this.xID = "banner-x-icon";
    this.x = document.getElementById("banner-x-icon");
    this.menuID = "nav-menu";
    this.menu = document.getElementById("nav-menu");
    this.overlayID = "overlay";
    this.overlay = document.getElementById("overlay");
  }
}

// src/client/component/LoginForm.ts
class LoginForm {
  loaderID;
  loader;
  submitID;
  submit;
  formID;
  form;
  constructor() {
    this.loaderID = "login-form-loader";
    this.loader = document.getElementById("login-form-loader");
    this.submitID = "login-form-submit";
    this.submit = document.getElementById("login-form-submit");
    this.formID = "login-form";
    this.form = document.getElementById("login-form");
  }
}

// src/client/client.ts
var router = {
  "/": () => {
    loginPage();
  },
  "/vision": () => {
    visionPage();
  },
  "/score/cem": () => {
    cemPage();
  },
  "/score/sales": () => {
    salesPage();
  },
  "/score/talent": () => {
    talentPage();
  },
  "/score/finance": () => {
    financePage();
  }
};
var loginPage = () => {
  let banner = new Banner;
  toggleNavMenu(banner);
  let loginForm = new LoginForm;
  console.log(banner);
  console.log(loginForm);
};
var visionPage = () => {
  let banner = new Banner;
  toggleNavMenu(banner);
  console.log(banner);
};
var cemPage = () => {
  let banner = new Banner;
  toggleNavMenu(banner);
  console.log(banner);
};
var salesPage = () => {
  let banner = new Banner;
  toggleNavMenu(banner);
  console.log(banner);
};
var talentPage = () => {
  let banner = new Banner;
  toggleNavMenu(banner);
  console.log(banner);
};
var financePage = () => {
  let banner = new Banner;
  toggleNavMenu(banner);
  console.log(banner);
};
var toggleNavMenu = (banner) => {
  banner.bars.addEventListener("click", () => {
    banner.bars.classList.toggle("hidden");
    banner.menu.classList.toggle("hidden");
    banner.x.classList.toggle("hidden");
    banner.overlay.classList.toggle("hidden");
  });
  banner.x.addEventListener("click", () => {
    banner.bars.classList.toggle("hidden");
    banner.menu.classList.toggle("hidden");
    banner.x.classList.toggle("hidden");
    banner.overlay.classList.toggle("hidden");
  });
  banner.overlay.addEventListener("click", () => {
    banner.bars.classList.toggle("hidden");
    banner.menu.classList.toggle("hidden");
    banner.x.classList.toggle("hidden");
    banner.overlay.classList.toggle("hidden");
  });
};
var routeFunc = router[window.location.pathname];
routeFunc();
