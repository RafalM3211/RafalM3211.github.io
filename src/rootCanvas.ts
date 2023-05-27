import type { HTMLRootCanvasElement } from "./types";

const contextIsNullError=new Error("root canvas context is null")

export function drawRoot(canvas: HTMLRootCanvasElement){
    const width=canvas.width;
    const height=canvas.height;
    const ctx=canvas.getContext("2d");
    if(!ctx){
        throw contextIsNullError;
    }

    ctx.beginPath();
    ctx.moveTo(15, height*0.5);
    ctx.lineTo(45, height*0.5);
    ctx.lineTo(65, height);
    ctx.lineTo(80, 5);
    ctx.lineTo(width, 5);
    ctx.stroke();
}


export function resizeRootCanvasAndRadicantInput(radicantInput: HTMLInputElement, rootCanvas: HTMLRootCanvasElement){
        if(!rootCanvas.dataset.minWidth) throw new Error("you should specify 'data-min-width' attribute on canvas element");
    
        const minWidth=parseInt(rootCanvas.dataset.minWidth);
        const additionalWidth=getAdditionalWidthBasedOnInputLength(radicantInput);
        radicantInput.style.width=getFontSizeNumber(radicantInput)+additionalWidth+"px";
        rootCanvas.width=minWidth+additionalWidth;
        drawRoot(rootCanvas);
}


function getFontSizeNumber(element: HTMLElement){
    const fontSizePx=getComputedStyle(element).fontSize;
    const fontSizeNumber=parseInt(fontSizePx.slice(0, -2));
    return fontSizeNumber; 
}

function getAdditionalWidthBasedOnInputLength(input: HTMLInputElement){
    const charWidthToHeightRatio=0.55;
    const inputLengt=input.value.length;
    const fontSize=getFontSizeNumber(input);
    const additionalWidth=charWidthToHeightRatio*fontSize*((inputLengt||1)-1);
    return additionalWidth
}

