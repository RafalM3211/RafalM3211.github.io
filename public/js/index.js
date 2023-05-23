import { indexInput, rootCanvas, radicantInput } from "./selectors.js";
import { drawRoot, resizeRootCanvasAndRadicantInput } from "./rootCanvas.js";
drawRoot(rootCanvas);
radicantInput.addEventListener("keydown", e => {
    resizeRootCanvasAndRadicantInput(radicantInput, rootCanvas);
});
indexInput.addEventListener("keydown", e => {
});
console.log("hello world");
