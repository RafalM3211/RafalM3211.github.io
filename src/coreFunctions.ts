import {
    multiplierOutput,
    indexOutput,
    radicantOutput,
    outputRootCanvas
} from "./selectors";
import { calculateRoot } from "./calculator"
import { drawRoot, removeRoot } from "./rootCanvas";
import {
    getIndexAndRadicant,
    clearRootValues, 
    clearError, 
    shouldDrawRootSymbol, 
    writeError 
} from "./helperFunctions";
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
    else if(root.multiplier===-1){
        multiplierOutput.innerHTML=(root.radicant===1||root.radicant===0)? "-"+root.radicant:"-";
    }
    else{
        multiplierOutput.innerHTML=root.multiplier+"";
    }    
}