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

/***/ "./src/calculator.ts":
/*!***************************!*\
  !*** ./src/calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateRoot: () => (/* binding */ calculateRoot)\n/* harmony export */ });\nfunction calculateRoot(index, radicant) {\n    let multiplier = 1;\n    let radicantOutput = 1;\n    checkForInputMistakes(index, radicant);\n    if (radicant < 0) {\n        radicant = Math.abs(radicant);\n        multiplier = -1;\n    }\n    if (!(radicant == 1 || radicant == 0 || index == 1)) {\n        for (let i = 2; i <= radicant; i++) {\n            let groupSize = 0;\n            while (radicant % i == 0) {\n                groupSize++;\n                if (groupSize == index) {\n                    multiplier *= i;\n                    groupSize = 0;\n                }\n                radicant /= i;\n            }\n            radicantOutput *= Math.pow(i, groupSize);\n        }\n    }\n    else {\n        radicantOutput = radicant;\n    }\n    return { multiplier, index, radicant: radicantOutput };\n}\nfunction checkForInputMistakes(index, radicant) {\n    if (index < 1 || (isEven(index) && radicant < 0)) {\n        throw \"input error\";\n    }\n}\nfunction isEven(number) {\n    return number % 2 === 0;\n}\n\n\n//# sourceURL=webpack:///./src/calculator.ts?");

/***/ }),

/***/ "./src/coreFunctions.ts":
/*!******************************!*\
  !*** ./src/coreFunctions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calculateAndWriteRoot: () => (/* binding */ calculateAndWriteRoot)\n/* harmony export */ });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.ts\");\n/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ \"./src/calculator.ts\");\n/* harmony import */ var _rootCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootCanvas */ \"./src/rootCanvas.ts\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helperFunctions */ \"./src/helperFunctions.ts\");\n\n\n\n\nfunction calculateAndWriteRoot() {\n    try {\n        const { index, radicant } = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.getIndexAndRadicant)();\n        if (!Number.isNaN(index) && !Number.isNaN(radicant)) {\n            const calculatedRootValues = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.calculateRoot)(index, radicant);\n            writeRoot(_selectors__WEBPACK_IMPORTED_MODULE_0__.outputRootCanvas, calculatedRootValues);\n            (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clearError)();\n        }\n    }\n    catch (exception) {\n        (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_2__.removeRoot)(_selectors__WEBPACK_IMPORTED_MODULE_0__.outputRootCanvas);\n        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clearRootValues)();\n        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.writeError)(exception);\n    }\n}\nfunction writeRoot(canvas, root) {\n    if (root.index === 1)\n        root.multiplier = root.radicant;\n    if ((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.shouldDrawRootSymbol)(root)) {\n        (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_2__.drawRoot)(canvas);\n        _selectors__WEBPACK_IMPORTED_MODULE_0__.indexOutput.innerText = root.index + \"\";\n        _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.innerText = root.radicant + \"\";\n    }\n    else {\n        (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_2__.removeRoot)(canvas);\n        _selectors__WEBPACK_IMPORTED_MODULE_0__.indexOutput.innerText = \"\";\n        _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.innerText = \"\";\n    }\n    if (root.multiplier === 1) {\n        _selectors__WEBPACK_IMPORTED_MODULE_0__.multiplierOutput.innerHTML = (root.radicant === 1 || root.radicant === 0) ? root.radicant + \"\" : \"\";\n    }\n    else if (root.multiplier === -1) {\n        _selectors__WEBPACK_IMPORTED_MODULE_0__.multiplierOutput.innerHTML = (root.radicant === 1 || root.radicant === 0) ? \"-\" + root.radicant : \"-\";\n    }\n    else {\n        _selectors__WEBPACK_IMPORTED_MODULE_0__.multiplierOutput.innerHTML = root.multiplier + \"\";\n    }\n}\n\n\n//# sourceURL=webpack:///./src/coreFunctions.ts?");

/***/ }),

/***/ "./src/helperFunctions.ts":
/*!********************************!*\
  !*** ./src/helperFunctions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearError: () => (/* binding */ clearError),\n/* harmony export */   clearRootValues: () => (/* binding */ clearRootValues),\n/* harmony export */   getIndexAndRadicant: () => (/* binding */ getIndexAndRadicant),\n/* harmony export */   limitInputLengh: () => (/* binding */ limitInputLengh),\n/* harmony export */   shouldDrawRootSymbol: () => (/* binding */ shouldDrawRootSymbol),\n/* harmony export */   writeError: () => (/* binding */ writeError)\n/* harmony export */ });\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.ts\");\n\nfunction getIndexAndRadicant() {\n    const index = _selectors__WEBPACK_IMPORTED_MODULE_0__.indexInput.valueAsNumber;\n    const radicant = _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput.valueAsNumber;\n    return { index, radicant };\n}\nfunction shouldDrawRootSymbol(root) {\n    return !(root.index === 1 || Math.abs(root.radicant) === 1);\n}\nfunction clearRootValues() {\n    _selectors__WEBPACK_IMPORTED_MODULE_0__.indexOutput.innerText = \"\";\n    _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.innerText = \"\";\n    _selectors__WEBPACK_IMPORTED_MODULE_0__.multiplierOutput.innerHTML = \"\";\n}\nfunction writeError(exception) {\n    _selectors__WEBPACK_IMPORTED_MODULE_0__.errorOutput.innerHTML = exception;\n}\nfunction clearError() {\n    _selectors__WEBPACK_IMPORTED_MODULE_0__.errorOutput.innerHTML = \"\";\n}\nfunction limitInputLengh(input, length) {\n    if (input.value.length > 8) {\n        input.value = input.value.slice(0, -1);\n    }\n}\n\n\n//# sourceURL=webpack:///./src/helperFunctions.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ \"./src/selectors.ts\");\n/* harmony import */ var _rootCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootCanvas */ \"./src/rootCanvas.ts\");\n/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions */ \"./src/helperFunctions.ts\");\n/* harmony import */ var _coreFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coreFunctions */ \"./src/coreFunctions.ts\");\n\n\n\n\n(0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.drawRoot)(_selectors__WEBPACK_IMPORTED_MODULE_0__.inputRootCanvas);\n(0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.drawRoot)(_selectors__WEBPACK_IMPORTED_MODULE_0__.outputRootCanvas);\n_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput.addEventListener(\"keydown\", e => {\n    setTimeout(() => {\n        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.limitInputLengh)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput, 8);\n        const additionalInputWidth = (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.getAdditionalWidthBasedOnElementAndText)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput, _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput.value);\n        (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.resizeRootCanvasAndContent)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput, _selectors__WEBPACK_IMPORTED_MODULE_0__.inputRootCanvas, additionalInputWidth);\n        (0,_coreFunctions__WEBPACK_IMPORTED_MODULE_3__.calculateAndWriteRoot)();\n        if (_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.textContent) {\n            const additionalOutputWidth = (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.getAdditionalWidthBasedOnElementAndText)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput, _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.textContent || \"\");\n            (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.resizeRootCanvasAndContent)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput, _selectors__WEBPACK_IMPORTED_MODULE_0__.outputRootCanvas, additionalOutputWidth);\n        }\n    }, 0);\n});\n_selectors__WEBPACK_IMPORTED_MODULE_0__.indexInput.addEventListener(\"keydown\", e => {\n    setTimeout(() => {\n        (0,_coreFunctions__WEBPACK_IMPORTED_MODULE_3__.calculateAndWriteRoot)();\n    }, 0);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/rootCanvas.ts":
/*!***************************!*\
  !*** ./src/rootCanvas.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   drawRoot: () => (/* binding */ drawRoot),\n/* harmony export */   getAdditionalWidthBasedOnElementAndText: () => (/* binding */ getAdditionalWidthBasedOnElementAndText),\n/* harmony export */   removeRoot: () => (/* binding */ removeRoot),\n/* harmony export */   resizeRootCanvasAndContent: () => (/* binding */ resizeRootCanvasAndContent)\n/* harmony export */ });\nconst contextIsNullError = new Error(\"root canvas context is null\");\nfunction drawRoot(canvas) {\n    const width = canvas.width;\n    const height = canvas.height;\n    const ctx = canvas.getContext(\"2d\");\n    if (!ctx) {\n        throw contextIsNullError;\n    }\n    removeRoot(canvas);\n    canvas.style.display = \"block\";\n    ctx.beginPath();\n    ctx.moveTo(15, height * 0.5);\n    ctx.lineTo(45, height * 0.5);\n    ctx.lineTo(65, height);\n    ctx.lineTo(80, 5);\n    ctx.lineTo(width, 5);\n    ctx.stroke();\n}\nfunction removeRoot(canvas) {\n    canvas.style.display = \"none\";\n    const width = canvas.width;\n    const height = canvas.height;\n    const ctx = canvas.getContext(\"2d\");\n    if (!ctx) {\n        throw contextIsNullError;\n    }\n    ctx.clearRect(0, 0, width, height);\n}\nfunction getAdditionalWidthBasedOnElementAndText(element, content) {\n    const charWidthToHeightRatio = 0.55;\n    const contentLengt = content.length;\n    const fontSize = getFontSizeNumber(element);\n    const additionalWidth = charWidthToHeightRatio * fontSize * ((contentLengt || 1) - 1);\n    return additionalWidth;\n}\nfunction resizeRootCanvasAndContent(content, rootCanvas, additionalWidth) {\n    if (!rootCanvas.dataset.minWidth) {\n        throw new Error(\"you should specify 'data-min-width' attribute on canvas element\");\n    }\n    const minWidth = parseInt(rootCanvas.dataset.minWidth);\n    content.style.width = getFontSizeNumber(content) + additionalWidth + \"px\";\n    rootCanvas.width = minWidth + additionalWidth;\n    drawRoot(rootCanvas);\n}\nfunction getFontSizeNumber(element) {\n    const fontSizePx = getComputedStyle(element).fontSize;\n    const fontSizeNumber = parseInt(fontSizePx.slice(0, -2));\n    return fontSizeNumber;\n}\n\n\n//# sourceURL=webpack:///./src/rootCanvas.ts?");

/***/ }),

/***/ "./src/selectors.ts":
/*!**************************!*\
  !*** ./src/selectors.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   errorOutput: () => (/* binding */ errorOutput),\n/* harmony export */   indexInput: () => (/* binding */ indexInput),\n/* harmony export */   indexOutput: () => (/* binding */ indexOutput),\n/* harmony export */   inputRootCanvas: () => (/* binding */ inputRootCanvas),\n/* harmony export */   multiplierOutput: () => (/* binding */ multiplierOutput),\n/* harmony export */   outputRootCanvas: () => (/* binding */ outputRootCanvas),\n/* harmony export */   radicantInput: () => (/* binding */ radicantInput),\n/* harmony export */   radicantOutput: () => (/* binding */ radicantOutput)\n/* harmony export */ });\nconst inputRootCanvas = document.querySelector(\"#input-root-canvas\");\nconst outputRootCanvas = document.querySelector(\"#output-root-canvas\");\nconst indexInput = document.querySelector(\".index\");\nconst radicantInput = document.querySelector(\".radicant\");\nconst multiplierOutput = document.querySelector(\".multiplier-output\");\nconst errorOutput = document.querySelector(\".error-output\");\nconst indexOutput = document.querySelector(\".index.root-output\");\nconst radicantOutput = document.querySelector(\".radicant.root-output\");\n\n\n//# sourceURL=webpack:///./src/selectors.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;