import { indexInput, inputRootCanvas, outputRootCanvas, radicantInput } from "./selectors.js";
import {drawRoot, resizeRootCanvasAndRadicantInput} from "./rootCanvas.js";

drawRoot(inputRootCanvas);
drawRoot(outputRootCanvas);

radicantInput.addEventListener("keydown", e=>{
    resizeRootCanvasAndRadicantInput(radicantInput, inputRootCanvas);
});

indexInput.addEventListener("keydown", e=>{
    
});