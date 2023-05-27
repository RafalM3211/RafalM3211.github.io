import {
    indexInput,
    radicantInput,
    multiplierOutput,
    indexOutput,
    radicantOutput 
} from "./selectors.js";
import type { Root } from "./types";

export function getIndexAndRadicant(){
    const index=indexInput.valueAsNumber;
    const radicant=radicantInput.valueAsNumber;

    return {index, radicant}
}

export function writeRootOutput(root: Root){
    if(root.multiplier===1){
        multiplierOutput.innerHTML="";
    }
    else{
        multiplierOutput.innerHTML=root.multiplier+"";
    }
    
    indexOutput.innerText=root.index+"";
    radicantOutput.innerText=root.radicant+"";
}