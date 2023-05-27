import {
     indexInput, 
     inputRootCanvas, 
     outputRootCanvas, 
     radicantInput,
     multiplierOutput,
     indexOutput,
     radicantOutput 
    } from "./selectors.js";
import {drawRoot, resizeRootCanvasAndRadicantInput} from "./rootCanvas.js";
import { calculateRoot } from "./calculator.js";
import type { Root } from "./types";

drawRoot(inputRootCanvas);
drawRoot(outputRootCanvas);

radicantInput.addEventListener("keydown", e=>{
    setTimeout(()=>{
        resizeRootCanvasAndRadicantInput(radicantInput, inputRootCanvas);
        const {index, radicant}=getIndexAndRadicant();
        if(index&&radicant){
            const root=calculateRoot(index, radicant);
            writeRootOutput(root);
        } 
    }, 0);
});

indexInput.addEventListener("keydown", e=>{
    
});


function getIndexAndRadicant(){
    const index=indexInput.valueAsNumber;
    const radicant=radicantInput.valueAsNumber;

    return {index, radicant}
}

function writeRootOutput(root: Root){
    if(root.multiplier===1){
        multiplierOutput.innerHTML="";
    }
    else{
        multiplierOutput.innerHTML=root.multiplier+"";
    }
    
    indexOutput.innerText=root.index+"";
    radicantOutput.innerText=root.radicant+"";
}