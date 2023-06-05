/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/calculator.ts":
/*!***************************!*\
  !*** ./src/calculator.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateRoot: () => (/* binding */ calculateRoot)
/* harmony export */ });
function calculateRoot(index, radicant) {
    let multiplier = 1;
    let radicantOutput = 1;
    checkForInputMistakes(index, radicant);
    if (radicant < 0) {
        radicant = Math.abs(radicant);
        multiplier = -1;
    }
    if (!(radicant == 1 || radicant == 0 || index == 1)) {
        for (let i = 2; i <= radicant; i++) {
            let groupSize = 0;
            while (radicant % i == 0) {
                groupSize++;
                if (groupSize == index) {
                    multiplier *= i;
                    groupSize = 0;
                }
                radicant /= i;
            }
            radicantOutput *= Math.pow(i, groupSize);
        }
    }
    else {
        radicantOutput = radicant;
    }
    return { multiplier, index, radicant: radicantOutput };
}
function checkForInputMistakes(index, radicant) {
    if (index < 1 || (isEven(index) && radicant < 0)) {
        throw "input error";
    }
}
function isEven(number) {
    return number % 2 === 0;
}


/***/ }),

/***/ "./src/coreFunctions.ts":
/*!******************************!*\
  !*** ./src/coreFunctions.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateAndWriteRoot: () => (/* binding */ calculateAndWriteRoot),
/* harmony export */   writeRoot: () => (/* binding */ writeRoot)
/* harmony export */ });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/selectors.ts");
/* harmony import */ var _calculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculator */ "./src/calculator.ts");
/* harmony import */ var _rootCanvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rootCanvas */ "./src/rootCanvas.ts");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.ts");




function calculateAndWriteRoot() {
    try {
        const { index, radicant } = (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.getIndexAndRadicant)();
        if (!Number.isNaN(index) && !Number.isNaN(radicant)) {
            const calculatedRootValues = (0,_calculator__WEBPACK_IMPORTED_MODULE_1__.calculateRoot)(index, radicant);
            writeRoot(_selectors__WEBPACK_IMPORTED_MODULE_0__.outputRootCanvas, calculatedRootValues);
            (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clearError)();
        }
    }
    catch (exception) {
        (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_2__.removeRoot)(_selectors__WEBPACK_IMPORTED_MODULE_0__.outputRootCanvas);
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.clearRootValues)();
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.writeError)(exception);
    }
}
function writeRoot(canvas, root) {
    if (root.index === 1)
        root.multiplier = root.radicant;
    if ((0,_helperFunctions__WEBPACK_IMPORTED_MODULE_3__.shouldDrawRootSymbol)(root)) {
        (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_2__.drawRoot)(canvas);
        _selectors__WEBPACK_IMPORTED_MODULE_0__.indexOutput.textContent = root.index + "";
        _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.textContent = root.radicant + "";
    }
    else {
        (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_2__.removeRoot)(canvas);
        _selectors__WEBPACK_IMPORTED_MODULE_0__.indexOutput.textContent = "";
        _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.textContent = "";
    }
    if (root.multiplier === 1) {
        _selectors__WEBPACK_IMPORTED_MODULE_0__.multiplierOutput.textContent = (root.radicant === 1 || root.radicant === 0) ? root.radicant + "" : "";
    }
    else if (root.multiplier === -1) {
        _selectors__WEBPACK_IMPORTED_MODULE_0__.multiplierOutput.textContent = (root.radicant === 1 || root.radicant === 0) ? "-" + root.radicant : "-";
    }
    else {
        _selectors__WEBPACK_IMPORTED_MODULE_0__.multiplierOutput.textContent = root.multiplier + "";
    }
}


/***/ }),

/***/ "./src/helperFunctions.ts":
/*!********************************!*\
  !*** ./src/helperFunctions.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearError: () => (/* binding */ clearError),
/* harmony export */   clearRootValues: () => (/* binding */ clearRootValues),
/* harmony export */   getIndexAndRadicant: () => (/* binding */ getIndexAndRadicant),
/* harmony export */   limitInputLengh: () => (/* binding */ limitInputLengh),
/* harmony export */   shouldDrawRootSymbol: () => (/* binding */ shouldDrawRootSymbol),
/* harmony export */   writeError: () => (/* binding */ writeError)
/* harmony export */ });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/selectors.ts");

function getIndexAndRadicant() {
    const index = _selectors__WEBPACK_IMPORTED_MODULE_0__.indexInput.valueAsNumber;
    const radicant = _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput.valueAsNumber;
    return { index, radicant };
}
function shouldDrawRootSymbol(root) {
    return !(root.index === 1 || Math.abs(root.radicant) === 1 || root.radicant === 0);
}
function clearRootValues() {
    _selectors__WEBPACK_IMPORTED_MODULE_0__.indexOutput.textContent = "";
    _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.textContent = "";
    _selectors__WEBPACK_IMPORTED_MODULE_0__.multiplierOutput.innerHTML = "";
}
function writeError(exception) {
    _selectors__WEBPACK_IMPORTED_MODULE_0__.errorOutput.innerHTML = exception;
}
function clearError() {
    _selectors__WEBPACK_IMPORTED_MODULE_0__.errorOutput.innerHTML = "";
}
function limitInputLengh(input, length) {
    if (input.value.length > 8) {
        input.value = input.value.slice(0, -1);
    }
}


/***/ }),

/***/ "./src/rootCanvas.ts":
/*!***************************!*\
  !*** ./src/rootCanvas.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   drawRoot: () => (/* binding */ drawRoot),
/* harmony export */   getAdditionalWidthBasedOnElementAndText: () => (/* binding */ getAdditionalWidthBasedOnElementAndText),
/* harmony export */   removeRoot: () => (/* binding */ removeRoot),
/* harmony export */   resizeRootCanvasAndContent: () => (/* binding */ resizeRootCanvasAndContent)
/* harmony export */ });
const contextIsNullError = new Error("root canvas context is null");
function drawRoot(canvas) {
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw contextIsNullError;
    }
    removeRoot(canvas);
    canvas.style.display = "block";
    ctx.beginPath();
    ctx.moveTo(15, height * 0.5);
    ctx.lineTo(45, height * 0.5);
    ctx.lineTo(65, height);
    ctx.lineTo(80, 5);
    ctx.lineTo(width, 5);
    ctx.stroke();
}
function removeRoot(canvas) {
    canvas.style.display = "none";
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw contextIsNullError;
    }
    ctx.clearRect(0, 0, width, height);
}
function getAdditionalWidthBasedOnElementAndText(element, content) {
    const charWidthToHeightRatio = 0.55;
    const contentLengt = content.length;
    const fontSize = getFontSizeNumber(element);
    const additionalWidth = charWidthToHeightRatio * fontSize * ((contentLengt || 1) - 1);
    return additionalWidth;
}
function resizeRootCanvasAndContent(content, rootCanvas, additionalWidth) {
    if (!rootCanvas.dataset.minWidth) {
        throw new Error("you should specify 'data-min-width' attribute on canvas element");
    }
    const minWidth = parseInt(rootCanvas.dataset.minWidth);
    content.style.width = getFontSizeNumber(content) + additionalWidth + "px";
    rootCanvas.width = minWidth + additionalWidth;
    drawRoot(rootCanvas);
}
function getFontSizeNumber(element) {
    const fontSizePx = getComputedStyle(element).fontSize;
    const fontSizeNumber = parseInt(fontSizePx.slice(0, -2));
    return fontSizeNumber;
}


/***/ }),

/***/ "./src/selectors.ts":
/*!**************************!*\
  !*** ./src/selectors.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errorOutput: () => (/* binding */ errorOutput),
/* harmony export */   indexInput: () => (/* binding */ indexInput),
/* harmony export */   indexOutput: () => (/* binding */ indexOutput),
/* harmony export */   inputRootCanvas: () => (/* binding */ inputRootCanvas),
/* harmony export */   multiplierOutput: () => (/* binding */ multiplierOutput),
/* harmony export */   outputRootCanvas: () => (/* binding */ outputRootCanvas),
/* harmony export */   radicantInput: () => (/* binding */ radicantInput),
/* harmony export */   radicantOutput: () => (/* binding */ radicantOutput)
/* harmony export */ });
const inputRootCanvas = document.querySelector("#input-root-canvas");
const outputRootCanvas = document.querySelector("#output-root-canvas");
const indexInput = document.querySelector(".index");
const radicantInput = document.querySelector(".radicant");
const multiplierOutput = document.querySelector(".multiplier-output");
const errorOutput = document.querySelector(".error-output");
const indexOutput = document.querySelector(".index.root-output");
const radicantOutput = document.querySelector(".radicant.root-output");


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "./src/selectors.ts");
/* harmony import */ var _rootCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rootCanvas */ "./src/rootCanvas.ts");
/* harmony import */ var _helperFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helperFunctions */ "./src/helperFunctions.ts");
/* harmony import */ var _coreFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coreFunctions */ "./src/coreFunctions.ts");




(0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.drawRoot)(_selectors__WEBPACK_IMPORTED_MODULE_0__.inputRootCanvas);
(0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.drawRoot)(_selectors__WEBPACK_IMPORTED_MODULE_0__.outputRootCanvas);
_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput.addEventListener("keydown", e => {
    setTimeout(() => {
        (0,_helperFunctions__WEBPACK_IMPORTED_MODULE_2__.limitInputLengh)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput, 8);
        const additionalInputWidth = (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.getAdditionalWidthBasedOnElementAndText)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput, _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput.value);
        (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.resizeRootCanvasAndContent)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantInput, _selectors__WEBPACK_IMPORTED_MODULE_0__.inputRootCanvas, additionalInputWidth);
        (0,_coreFunctions__WEBPACK_IMPORTED_MODULE_3__.calculateAndWriteRoot)();
        if (_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.textContent) {
            const additionalOutputWidth = (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.getAdditionalWidthBasedOnElementAndText)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput, _selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput.textContent || "");
            (0,_rootCanvas__WEBPACK_IMPORTED_MODULE_1__.resizeRootCanvasAndContent)(_selectors__WEBPACK_IMPORTED_MODULE_0__.radicantOutput, _selectors__WEBPACK_IMPORTED_MODULE_0__.outputRootCanvas, additionalOutputWidth);
        }
    }, 0);
});
_selectors__WEBPACK_IMPORTED_MODULE_0__.indexInput.addEventListener("keydown", e => {
    setTimeout(() => {
        (0,_coreFunctions__WEBPACK_IMPORTED_MODULE_3__.calculateAndWriteRoot)();
    }, 0);
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map