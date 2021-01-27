/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ (() => {

var app = new Vue({
  el: '#root',
  data: {
    imgcsspath: '../',
    imgpath: 'dist/img/',
    img: {
      sitelogo: 'logo.svg',
      small_logo: 'logo-small.svg',
      ill_1: 'illustration-main.jpg',
      google: 'google-logo.svg',
      slack: 'slack-logo.svg',
      hardcore: 'hardcore.png',
      nofeed: 'nofeedback.png',
      notsafe: 'notsafe.png',
      before: 'before.png',
      light: 'lightweight.png',
      sifeed: 'feedbacksuggestions.png',
      safe: 'safe.png',
      after: 'after.png',
      feedback: 'employee-feedback.jpg',
      communication: 'communication.jpg',
      survey: 'employee-survey.jpg',
      insights: 'insights.jpg',
      em_review: 'performance-review.jpg',
      review: 'review.jpg',
      em_survey: 'employee-survey.jpg',
      recognition: 'recognition.jpg',
      chat: 'chat.svg',
      happy: 'happy.svg',
      face_1: 'alex.png',
      face_2: 'bohdan.png'
    },
    chat: {
      value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, consequuntur laborum inventore soluta qui quae eum accusantium autem culpa necessitatibus aspernatur? Ex incidunt voluptates quas officia nemo dolor odit dicta suscipit vitae ad in amet aperiam culpa reiciendis veritatis dignissimos corporis eligendi perferendis cum, saepe earum temporibus consequatur alias sed? Quibusdam enim suscipit error voluptatibus esse eos quo molestiae quos, dolorem repudiandae doloribus numquam. Quam voluptatum voluptates, dicta ad, tempora rem at odio, consequuntur aperiam animi obcaecati. Doloribus quam vero quod natus sequi, perspiciatis impedit expedita incidunt culpa ad, sint ipsum optio numquam dolorum harum voluptate cumque vel nisi architecto placeat! Quam assumenda architecto distinctio minima repudiandae voluptatibus nostrum. Quae, fuga ratione. Porro ullam voluptate a ex iusto velit repudiandae quasi, vero eum ipsam maxime? Quasi optio natus ducimus autem quas ea ipsam tenetur, neque adipisci unde assumenda harum quis enim earum quod laboriosam provident voluptate cum? Impedit asperiores repellendus unde omnis dignissimos, ullam eum consequatur similique minima reiciendis officiis sed? Quam eveniet doloremque qui molestiae expedita. Rem molestias tempore odio doloribus perspiciatis excepturi, modi dicta rerum architecto repellat, harum voluptatem commodi. Esse numquam odit, ex nemo, veniam dignissimos quod dolorem nihil iste molestiae in placeat libero excepturi ea minima.'
    },
    menu: {
      product: ['feedback', 'surveys', 'reviews', 'praise', 'slack', 'integration', 'schedule a demo', 'pricing'],
      about: ['feedback', 'surveys', 'reviews', 'praise'],
      connect: ['feedback', 'surveys', 'reviews', 'praise'],
      lobs: ['feedback', 'surveys', 'reviews', 'praise'],
      fromtheblog: ['how to change your company culture: a four-step framework', 'how teams can be more productive by killing 8-hour workday', 'how to build high performing teams inspired by nature', 'view all']
    }
  },
  computed: {},
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
}); //:src="imgpath+img.chat.svg"

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {}
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/app.js"],
/******/ 			["./src/app.scss"]
/******/ 		];
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
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSass"] = self["webpackChunkSass"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	__webpack_require__.x();
/******/ })()
;