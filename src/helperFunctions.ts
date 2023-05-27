import {
    indexInput,
    radicantInput,
    multiplierOutput,
    indexOutput,
    radicantOutput,
    outputRootCanvas
} from "./selectors.js";
import { calculateRoot } from "./calculator.js"
import { drawRoot, removeRoot } from "./rootCanvas.js";
import { errorOutput } from "./selectors.js";
import type { Root, HTMLRootCanvasElement } from "./types";


export function calculateAndWriteRoot(){
    try {
        const {index, radicant}=getIndexAndRadicant();
        if( !Number.isNaN(index) && !Number.isNaN(radicant)){
            const calculatedRootValues=calculateRoot(index, radicant);
            writeRoot(outputRootCanvas, calculatedRootValues);
            clearError();
        } 
    }
    catch (exception) {
        removeRoot(outputRootCanvas);
        clearRootValues();
        writeError(exception as string);
    }
}

function getIndexAndRadicant(){
    const index=indexInput.valueAsNumber;
    const radicant=radicantInput.valueAsNumber;

    return {index, radicant}
}

function writeRoot(canvas: HTMLRootCanvasElement, root: Root){
    if(root.index===1) root.multiplier=root.radicant;

    if(shouldDrawRootSymbol(root)) {
        drawRoot(canvas);
        indexOutput.innerText=root.index+"";
        radicantOutput.innerText=root.radicant+"";
    }
    else {
        removeRoot(canvas);
        indexOutput.innerText="";
        radicantOutput.innerText="";
    }

    if(root.multiplier===1){
        multiplierOutput.innerHTML=(root.radicant===1||root.radicant===0)? root.radicant+"":"";
    }
    else{
        multiplierOutput.innerHTML=root.multiplier+"";
    }
}

function shouldDrawRootSymbol(root: Root){
    return !(root.index===1||root.radicant===1)
}


function clearRootValues(){
    indexOutput.innerText="";
    radicantOutput.innerText="";
    multiplierOutput.innerHTML="";
}

function writeError(exception: string){
    errorOutput.innerHTML=exception;
}

function clearError(){
    errorOutput.innerHTML="";
}