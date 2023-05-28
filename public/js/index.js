import { indexInput, inputRootCanvas, outputRootCanvas, radicantInput, radicantOutput } from "./selectors.js";
import { drawRoot, resizeRootCanvasAndContent, getAdditionalWidthBasedOnElementAndText } from "./rootCanvas.js";
import { calculateAndWriteRoot } from "./coreFunctions.js";
drawRoot(inputRootCanvas);
drawRoot(outputRootCanvas);
radicantInput.addEventListener("keydown", e => {
    setTimeout(() => {
        const additionalInputWidth = getAdditionalWidthBasedOnElementAndText(radicantInput, radicantInput.value);
        resizeRootCanvasAndContent(radicantInput, inputRootCanvas, additionalInputWidth);
        calculateAndWriteRoot();
        if (radicantOutput.textContent) {
            const additionalOutputWidth = getAdditionalWidthBasedOnElementAndText(radicantOutput, radicantOutput.textContent || "");
            resizeRootCanvasAndContent(radicantOutput, outputRootCanvas, additionalOutputWidth);
        }
    }, 0);
});
indexInput.addEventListener("keydown", e => {
    setTimeout(() => {
        calculateAndWriteRoot();
    }, 0);
});
