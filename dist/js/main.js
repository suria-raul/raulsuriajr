/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/data.js":
/*!********************!*\
  !*** ./js/data.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "datas": () => (/* binding */ datas)
/* harmony export */ });
var datas = {
  workExperiences: {
    yondu: {
      name: 'Yondu',
      position: 'Software Engineer - Drupal',
      duration: 'September 2022 - Present',
      responsibilities: ['Bug fixing and Troubleshooting', 'Applying enhancements to an existing application', 'Following best practice and standards', 'Code implementation enhancements', 'Git and Composer']
    },
    halcyon: {
      name: 'Halcyon Digital Media Design',
      position: 'Drupal Developer',
      duration: 'March 2021 - September 2022',
      responsibilities: ['Creating Drupal application from scratch', 'Mobile responsive', 'Custom modules, theming and Drupal MVC', 'Deploying applications in cpanel', 'Linux Shell Scripting', 'Git, Drush and Composer', 'DDEV for local development']
    },
    coreproc: {
      name: 'Coreproc',
      position: 'PHP Developer',
      duration: 'September 2019 - March 2021',
      responsibilities: ['Creating Drupal or Laravel applications from start to finish', 'Drupal and laravel web applications maintenance', 'Troubleshooting, Bug fixing and enhancements to drupal application', 'Integrating new technologies suggested by marketing', 'Linux Shell Scripting', 'Mobile responsive', 'Unit testing for API\'s created using laravel', 'MVC for both drupal and laravel']
    },
    purplebug: {
      name: 'PurpleBug Inc',
      position: 'Junior Web Developer',
      duration: 'August 2018 - February 2019',
      responsibilities: ['Bug fixing and Troubleshooting', 'Laravel and wordpress application maintenance', 'Applying enchancements to an existing application', 'Creating Mobile Responsive Applications', 'Providing Web support', 'Analyzing and reviewing design specifications']
    },
    wns_wfm: {
      name: 'WNS Global Services',
      position: 'Executive Workforce',
      duration: 'April 2017 - September 2017',
      responsibilities: ['Planning contact center agent\'s schedule', 'Monitoring and reporting agent\'s real time performance']
    },
    wns_csr: {
      name: 'WNS Global Services',
      position: 'Customer service representative',
      duration: 'October 2015 - April 2017',
      responsibilities: ['Provides resolution on all client inquiries', 'Booking tickets', 'Bag\'s Check-in', 'etc.,']
    }
  },
  projects: {
    charlton_media: {
      name: 'Charlton Media',
      technology: 'Drupal 9',
      image: 'images/charlton_media.png',
      link: 'https://charltonmedia.com/'
    },
    elbien_hotel: {
      name: 'El bien hotel tagaytay',
      technology: 'Drupal 9',
      image: 'images/elbien_hotel_tagaytay.png',
      link: 'https://elbienhotel.com/'
    },
    alstra: {
      name: 'Alstra Contact Page',
      technology: 'Drupal 8',
      image: 'images/alstra_form.png',
      link: 'https://ccs.alstra.ph/'
    },
    wellness_home_massage: {
      name: 'Royal Wellness',
      technology: 'Drupal 9',
      image: 'images/royal_wellness.png',
      link: 'https://wellnesshomemassage.com/'
    },
    bonakid: {
      name: 'Bonakid',
      technology: 'Drupal 8',
      image: 'images/bonakid.png',
      link: 'https://batangmaylaban.com.ph'
    },
    dryBrush: {
      name: 'drybrush',
      technology: 'Laravel',
      image: 'images/dryBrush.png',
      link: 'https://drybrush.com/'
    },
    mom_baby_hub: {
      name: 'Mom and Baby Hub',
      technology: 'Laravel',
      image: 'images/momandbaby.png',
      link: 'https://momandbabyhub.com/'
    }
  },
  skills: {
    drupal: {
      name: 'Drupal',
      icon: 'images/icons/drupal.png'
    },
    laravel: {
      name: 'Laravel',
      icon: 'images/icons/laravel.png'
    },
    php: {
      name: 'PHP',
      icon: 'images/icons/php.png'
    },
    mysql: {
      name: 'MySQL',
      icon: 'images/icons/mysql.png'
    },
    git: {
      name: 'Git',
      icon: 'images/icons/git.png'
    },
    javascript: {
      name: 'JavaScript',
      icon: 'images/icons/javaScript.png'
    },
    // vue: {
    //     name: 'Vue',
    //     icon: 'images/icons/vue.png',
    // },
    jquery: {
      name: 'JQuery',
      icon: 'images/icons/jquery.png'
    },
    tailwindcss: {
      name: 'Tailwind Css',
      icon: 'images/icons/tailwindcss.png'
    },
    bootstrap: {
      name: 'Bootstrap',
      icon: 'images/icons/bootstrap.png'
    },
    sass: {
      name: 'Sass',
      icon: 'images/icons/sass.png'
    },
    css3: {
      name: 'CSS',
      icon: 'images/icons/css3.png'
    },
    html: {
      name: 'HTML',
      icon: 'images/icons/html5.png'
    }
  }
};

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./js/data.js");

function experiences() {
  var _loop = function _loop() {
    var container = document.querySelector('#work-experience .item-container');
    var div = document.createElement('div');
    var h4 = document.createElement('H4');
    var span = document.createElement('span');
    var list = document.createElement('ul');
    div.classList.add('py-4', 'mb-4');
    h4.classList.add('text-base', 'sm:text-lg', 'md:text-xl', 'lg:text-2xl', 'xl:3xl', 'my-1');
    span.classList.add('text-xs', 'mb-1.5', 'block', 'uppercase');
    list.classList.add('list-disc', 'pl-10');
    h4.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.datas.workExperiences[company].position;
    span.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.datas.workExperiences[company].name + ', ' + _data__WEBPACK_IMPORTED_MODULE_0__.datas.workExperiences[company].duration;
    _data__WEBPACK_IMPORTED_MODULE_0__.datas.workExperiences[company].responsibilities.forEach(function (responsibility) {
      var item = document.createElement('li');
      item.classList.add('text-base');
      item.textContent = responsibility;
      list.appendChild(item);
    });
    div.appendChild(h4);
    div.appendChild(span);
    div.appendChild(list);
    container.appendChild(div);
  };
  for (var company in _data__WEBPACK_IMPORTED_MODULE_0__.datas.workExperiences) {
    _loop();
  }
}
function projectList() {
  for (var project in _data__WEBPACK_IMPORTED_MODULE_0__.datas.projects) {
    var projectContainer = document.querySelector('#projects .projects-container');
    var anchor = document.createElement('a');
    var imageContainer = document.createElement('div');
    var image = document.createElement('img');
    var span = document.createElement('span');
    var spanTech = document.createElement('span');
    anchor.setAttribute('href', _data__WEBPACK_IMPORTED_MODULE_0__.datas.projects[project].link);
    anchor.setAttribute('target', '_blank');
    image.setAttribute('src', _data__WEBPACK_IMPORTED_MODULE_0__.datas.projects[project].image);
    image.setAttribute('alt', _data__WEBPACK_IMPORTED_MODULE_0__.datas.projects[project].name);
    span.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.datas.projects[project].name;
    spanTech.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.datas.projects[project].technology;
    imageContainer.classList.add('image-container', 'mb-3');
    image.classList.add('w-80', 'h-60', 'mx-auto');
    span.classList.add('block', 'text-center');
    spanTech.classList.add('block', 'text-center');
    imageContainer.appendChild(image);
    anchor.appendChild(imageContainer);
    anchor.appendChild(span);
    anchor.appendChild(spanTech);
    projectContainer.appendChild(anchor);
  }
}
function skillList() {
  for (var skill in _data__WEBPACK_IMPORTED_MODULE_0__.datas.skills) {
    var container = document.querySelector('#skills .skills-container');
    var icon = document.createElement('img');
    var iconContainer = document.createElement('div');
    var span = document.createElement('span');
    icon.setAttribute('src', _data__WEBPACK_IMPORTED_MODULE_0__.datas.skills[skill].icon);
    icon.setAttribute('alt', _data__WEBPACK_IMPORTED_MODULE_0__.datas.skills[skill].name);
    span.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.datas.skills[skill].name;
    icon.classList.add('w-24', 'block', 'mx-auto', 'mb-2');
    span.classList.add('capitalize');
    iconContainer.classList.add('block', 'mx-auto', 'text-center');
    iconContainer.appendChild(icon);
    iconContainer.appendChild(span);
    container.appendChild(iconContainer);
  }
}
function showSideMenu() {
  var hamburgerMenu = document.querySelector('#hamburger');
  var menu = document.querySelector('#actual-menu');
  var sections = Array.from(document.querySelectorAll('#app section'));
  var menuList = Array.from(document.querySelectorAll('#actual-menu ul li'));
  hamburgerMenu.addEventListener('click', function () {
    this.classList.add('menu-active');
    menu.classList.add('active');
  });
  sections.forEach(function (section) {
    hideSideMenu(section);
  });
  menuList.forEach(function (item) {
    hideSideMenu(item);
  });
}
function hideSideMenu(element) {
  var hamburgerMenu = document.querySelector('#hamburger');
  var menu = document.querySelector('#actual-menu');
  element.scrollIntoView();
  element.addEventListener('click', function () {
    hamburgerMenu.classList.remove('menu-active');
    menu.classList.remove('active');
  });
}
window.onload = function () {
  experiences();
  projectList();
  skillList();
  showSideMenu();
};

/***/ }),

/***/ "./css/style.scss":
/*!************************!*\
  !*** ./css/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/dist/js/main": 0,
/******/ 			"dist/css/style": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["dist/css/style"], () => (__webpack_require__("./js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["dist/css/style"], () => (__webpack_require__("./css/style.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;