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
import type { Root, HTMLRootCanvasElement } from "./types";


export function calculateAndWriteRoot(){
    const {index, radicant}=getIndexAndRadicant();
    if(index&&radicant){
        const calculatedRootValues=calculateRoot(index, radicant);
        writeRoot(outputRootCanvas, calculatedRootValues);
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
        multiplierOutput.innerHTML="";
    }
    else{
        multiplierOutput.innerHTML=root.multiplier+"";
    }
}

function shouldDrawRootSymbol(root: Root){
    return !(root.index===1||root.radicant===1)
}

