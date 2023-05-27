import { indexInput, inputRootCanvas, outputRootCanvas, radicantInput } from "./selectors.js";
import { drawRoot, resizeRootCanvasAndRadicantInput } from "./rootCanvas.js";
import { calculateRoot } from "./calculator.js";
import { getIndexAndRadicant, writeRootOutput } from "./helperFunctions";
drawRoot(inputRootCanvas);
drawRoot(outputRootCanvas);
radicantInput.addEventListener("keydown", e => {
    setTimeout(() => {
        resizeRootCanvasAndRadicantInput(radicantInput, inputRootCanvas);
        const { index, radicant } = getIndexAndRadicant();
        if (index && radicant) {
            const root = calculateRoot(index, radicant);
            writeRootOutput(root);
        }
    }, 0);
});
indexInput.addEventListener("keydown", e => {
    setTimeout(() => {
        const { index, radicant } = getIndexAndRadicant();
        if (index && radicant) {
            const root = calculateRoot(index, radicant);
            writeRootOutput(root);
        }
    }, 0);
});
