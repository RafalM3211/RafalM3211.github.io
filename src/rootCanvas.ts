import type { HTMLRootCanvasElement } from "./types";

const contextIsNullError=new Error("root canvas context is null")

export function drawRoot(canvas: HTMLRootCanvasElement){
    const width=canvas.width;
    const height=canvas.height;
    const ctx=canvas.getContext("2d");
    if(!ctx){
        throw contextIsNullError;
    }

    removeRoot(canvas);
    canvas.style.display="block";

    ctx.beginPath();
    ctx.moveTo(15, height*0.5);
    ctx.lineTo(45, height*0.5);
    ctx.lineTo(65, height);
    ctx.lineTo(80, 5);
    ctx.lineTo(width, 5);
    ctx.stroke();
}

export function removeRoot(canvas: HTMLRootCanvasElement){
    canvas.style.display="none";
    
    const width=canvas.width;
    const height=canvas.height;
    const ctx=canvas.getContext("2d");
    if(!ctx){
        throw contextIsNullError;
    }

    ctx.clearRect(0, 0, width, height); 
}


export function getAdditionalWidthBasedOnElementAndText(element: HTMLElement, content: string){
    const charWidthToHeightRatio=0.55;
    const contentLengt=content.length;
    const fontSize=getFontSizeNumber(element);
    const additionalWidth=charWidthToHeightRatio*fontSize*((contentLengt||1)-1);
    return additionalWidth
}



export function resizeRootCanvasAndContent(content: HTMLElement, rootCanvas: HTMLRootCanvasElement, additionalWidth: number){
    if(!rootCanvas.dataset.minWidth){
        throw new Error("you should specify 'data-min-width' attribute on canvas element");
    } 
    
    const minWidth=parseInt(rootCanvas.dataset.minWidth);
    content.style.width=getFontSizeNumber(content)+additionalWidth+"px";
    rootCanvas.width=minWidth+additionalWidth;
    drawRoot(rootCanvas);
}


function getFontSizeNumber(element: HTMLElement){
    const fontSizePx=getComputedStyle(element).fontSize;
    const fontSizeNumber=parseInt(fontSizePx.slice(0, -2));
    return fontSizeNumber; 
}


