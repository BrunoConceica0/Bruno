/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/anime-scroll.js":
/*!************************************!*\
  !*** ./js/modules/anime-scroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimeScroll)\n/* harmony export */ });\n//na estruta do html tem que puxa os sections principais usando o data-scroll='section'\r\n//criando um evento com window, \"janela que contém um elemento DOM\" e o callback\r\n// pega a sections e fale com cada elemento com o forEach crie um variante do top section do cliente/usuário, usando o .getBoundingClientRect().top\r\n//faz um conferencia de se sectionTop for menor do que zero e então o section terá classe de ativo\r\n// indo ao css usando o atributo do data-scrol\"section\", use o opacity, transfom e transition e quando for ativo faz animar\r\n//por tanto não esta 100% para melhora tem que peag a metade da tela do usuário e\r\nfunction initAnimeScroll() {}\r\nconst sections = document.querySelectorAll(\"[data-scroll='section']\");\r\n\r\nfunction animeScroll() {\r\n  sections.forEach((section) => {\r\n    const metaTela = window.innerHeight * 0.6;\r\n    const sectionTop = section.getBoundingClientRect().top - metaTela;\r\n    if (sectionTop < 0) {\r\n      section.classList.add(\"active\");\r\n    } else {\r\n      section.classList.remove(\"active\");\r\n    }\r\n  });\r\n}\r\nwindow.addEventListener(\"scroll\", animeScroll);\r\n\n\n//# sourceURL=webpack://meu-portfilo/./js/modules/anime-scroll.js?");

/***/ }),

/***/ "./js/modules/header-scroll.js":
/*!*************************************!*\
  !*** ./js/modules/header-scroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initHeaderScroll)\n/* harmony export */ });\nfunction initHeaderScroll() {\r\n  const header = document.querySelector(\"[data-scrolling]\");\r\n  const section = document.querySelector(\"[data-observer]\");\r\n  const listMenu = document.querySelector('[data-button=\"lista\"]');\r\n  const menu = document.querySelector('[data-button=\"menu\"]');\r\n\r\n  function scrollingHeader() {\r\n    const options = {\r\n      root: null,\r\n      threshold: 0,\r\n      marginTop: \"0\",\r\n    };\r\n    const observer = new IntersectionObserver(function (entries) {\r\n      entries.forEach((entry) => {\r\n        if (!entry.isIntersecting) {\r\n          header.classList.add(\"scrolling\");\r\n          if (window.section <= 0) {\r\n            listMenu.style.marginTop = \"62px\";\r\n            menu.style.marginRight = \"-50px\";\r\n          }\r\n        } else {\r\n          header.classList.remove(\"scrolling\");\r\n          listMenu.style.marginTop = \"0px\";\r\n        }\r\n      });\r\n    }, options);\r\n    observer.observe(section);\r\n  }\r\n\r\n  window.addEventListener(\"scroll\", scrollingHeader);\r\n\r\n  window.addEventListener(\"unload\", () => {\r\n    window.removeEventListener(\"scroll\", scrollingHeader);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://meu-portfilo/./js/modules/header-scroll.js?");

/***/ }),

/***/ "./js/modules/menu-mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _oustide_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./oustide.js */ \"./js/modules/oustide.js\");\n\r\nfunction initMenuMobile() {\r\n  const btnMenuMobile = document.querySelector('[data-button=\"menu\"]');\r\n  const listMenuMobile = document.querySelector('[data-button=\"lista\"]');\r\n  const eventos = [\"click\", \"touchstart\"];\r\n  //desconhecido ? o botão esta dando null\r\n  function openMenu() {\r\n    listMenuMobile.classList.add(\"active\");\r\n    btnMenuMobile.classList.add(\"active\");\r\n    (0,_oustide_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(listMenuMobile, eventos, () => {\r\n      console.log(\"test\");\r\n      listMenuMobile.classList.remove(\"active\");\r\n      btnMenuMobile.classList.remove(\"active\");\r\n    });\r\n  }\r\n  btnMenuMobile.addEventListener(\"click\", openMenu);\r\n}\r\n\n\n//# sourceURL=webpack://meu-portfilo/./js/modules/menu-mobile.js?");

/***/ }),

/***/ "./js/modules/oustide.js":
/*!*******************************!*\
  !*** ./js/modules/oustide.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ oustide)\n/* harmony export */ });\n// Crie o evento do html\r\n// no oustide coloaque o paramentro do element , events e callback\r\n// cria um evento do html de click\r\n// crie a função do callback do evento, com ele o parametro do oustise element, vai conferi se contém event.target, se ocorre ele tem que excuta os cleanupListeners() e o callback() dentro da função\r\n// crei função  cleanupListeners para que quando for clicar pra fora, ele desativara o estilo de active como dispaly:none ; por padrão, pora que isso ocorra tem que criar um forEach do paramentro do events do outside, não é necesssario usar o forEach quando somento houve apenas 1 event, assim pegado html e removendo o evento  html.removeEventListener(eventName, clickOutside); e fora do loop , tem que remove támbem o attributo do elements oustideAttr\r\n// cria uma outra váriovel outsideAtt =\"data-outside\"\r\n//Tem que conferi o se existe se tem o atributo de oustide no element   if (!element.hasAttribute(outsideAttr)), \"esta conferencia é isolado\"\r\n// se não existir que fazer um loop com setTemout e nele tem que colocar o outro lood events e colocar  \"html.addEventListener que já existe\"\r\n//após conferir adicionar  element.setAttribute(outside, \"\")\r\n// e quando for clicar para for tem que remove o elemento do element, tem que colocar após da funcão  cleanupListeners forEach\r\n// e no final da ultimo linha tem que colocar para return cleanupListeners;\r\n\r\nfunction oustide(element, events, callback) {\r\n  const html = document.documentElement;\r\n  const oustideAttr = \"data-oustide\";\r\n\r\n  const oustideClick = (event) => {\r\n    if (!element.contains(event.target)) {\r\n      callback();\r\n      cleanupListener();\r\n    }\r\n  };\r\n\r\n  const cleanupListener = () => {\r\n    events.forEach((eventName) => {\r\n      html.removeEventListener(eventName, oustideClick);\r\n    });\r\n    element.removeAttribute(oustideAttr);\r\n  };\r\n\r\n  if (!element.hasAttribute(oustideAttr)) {\r\n    events.forEach((eventName) => {\r\n      setTimeout(() => {\r\n        html.addEventListener(eventName, oustideClick);\r\n      });\r\n    });\r\n    element.setAttribute(oustideAttr, \"\");\r\n  }\r\n  return cleanupListener;\r\n}\r\n\n\n//# sourceURL=webpack://meu-portfilo/./js/modules/oustide.js?");

/***/ }),

/***/ "./js/modules/scroll-suave.js":
/*!************************************!*\
  !*** ./js/modules/scroll-suave.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSuave)\n/* harmony export */ });\n//1 primeiro passo é chamar os linksInternos\r\n//com ele faça um forEach para cada elemento adcionar um evento de click\r\n//2 com isso faz a função de animação ao scroll\r\n// previne o clica quando ocorrer e crie um nova variante que puxe o href do evento, que vem do link, para cada link ussando this (this.getAttribute(\"href\"))\r\n//  agora puxe os atributo da section do href\r\n// para funcionar o animaçãoScroll tem que pegar o top de cada section usando offsetTop\r\n// usando o window.scrollTo, usando este metódo use so paramentros de top para topo do sections e  behavior: \"smooth\",\r\n\r\nfunction initScrollSuave() {\r\n  const sections = document.querySelectorAll('[href^=\"#\"]');\r\n\r\n  function scrollClick(event) {\r\n    event.preventDefault();\r\n    const href = this.getAttribute(\"href\");\r\n    const section = document.querySelector(href);\r\n    const sectionTop = section.offsetTop;\r\n    window.scroll({\r\n      top: sectionTop,\r\n      behavior: \"smooth\",\r\n    });\r\n  }\r\n\r\n  sections.forEach((section) => {\r\n    section.addEventListener(\"click\", scrollClick);\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://meu-portfilo/./js/modules/scroll-suave.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu-mobile.js */ \"./js/modules/menu-mobile.js\");\n/* harmony import */ var _modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll-suave.js */ \"./js/modules/scroll-suave.js\");\n/* harmony import */ var _modules_anime_scroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/anime-scroll.js */ \"./js/modules/anime-scroll.js\");\n/* harmony import */ var _modules_header_scroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/header-scroll.js */ \"./js/modules/header-scroll.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_menu_mobile_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scroll_suave_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_anime_scroll_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_header_scroll_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\n\n//# sourceURL=webpack://meu-portfilo/./js/script.js?");

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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;