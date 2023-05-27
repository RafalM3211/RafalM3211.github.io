import {
     indexInput, 
     inputRootCanvas, 
     outputRootCanvas, 
     radicantInput
    } from "./selectors.js";
import {drawRoot, resizeRootCanvasAndRadicantInput} from "./rootCanvas.js";
import { calculateRoot } from "./calculator.js";
import { getIndexAndRadicant, writeRootOutput } from "./helperFunctions.js";

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

function calculateAndWriteRoot(){
    const {index, radicant}=getIndexAndRadicant();
    if(index&&radicant){
        const root=calculateRoot(index, radicant);
        writeRootOutput(root);
    } 
}

