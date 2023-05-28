import {
    indexInput,
    radicantInput,
    multiplierOutput,
    indexOutput,
    radicantOutput,
} from "./selectors.js";
import { errorOutput } from "./selectors.js";
import type { Root } from "./types";


export function getIndexAndRadicant(){
    const index=indexInput.valueAsNumber;
    const radicant=radicantInput.valueAsNumber;

    return {index, radicant}
}

export function shouldDrawRootSymbol(root: Root){
    return !(root.index===1||root.radicant===1)
}

export function clearRootValues(){
    indexOutput.innerText="";
    radicantOutput.innerText="";
    multiplierOutput.innerHTML="";
}

export function writeError(exception: string){
    errorOutput.innerHTML=exception;
}

export function clearError(){
    errorOutput.innerHTML="";
}

export function limitInputLengh(input: HTMLInputElement, length: number){
    if(input.value.length>8){
        input.value=input.value.slice(0, -1);
    }
}