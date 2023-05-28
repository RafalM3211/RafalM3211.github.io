import {
     indexInput, 
     inputRootCanvas, 
     outputRootCanvas, 
     radicantInput
    } from "./selectors.js";
import {drawRoot, resizeRootCanvasAndRadicantInput} from "./rootCanvas.js";
import { calculateAndWriteRoot } from "./coreFunctions.js";

drawRoot(inputRootCanvas);
drawRoot(outputRootCanvas);

radicantInput.addEventListener("keydown", e=>{
    setTimeout(()=>{
        resizeRootCanvasAndRadicantInput(radicantInput, inputRootCanvas);
        calculateAndWriteRoot();
    }, 0);
});

indexInput.addEventListener("keydown", e=>{
    setTimeout(()=>{
        calculateAndWriteRoot();
    }, 0);
});




