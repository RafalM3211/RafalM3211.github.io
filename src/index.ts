import {
     indexInput, 
     inputRootCanvas, 
     outputRootCanvas, 
     radicantInput,
     radicantOutput
    } from "./selectors";
import { 
    drawRoot, 
    resizeRootCanvasAndContent,
    getAdditionalWidthBasedOnElementAndText
} from "./rootCanvas";
import { limitInputLengh } from "./helperFunctions";
import { calculateAndWriteRoot } from "./coreFunctions";

drawRoot(inputRootCanvas);
drawRoot(outputRootCanvas);

radicantInput.addEventListener("keydown", e=>{
    setTimeout(()=>{
        limitInputLengh(radicantInput, 8);

        const additionalInputWidth=getAdditionalWidthBasedOnElementAndText(radicantInput, radicantInput.value);
        resizeRootCanvasAndContent(radicantInput, inputRootCanvas, additionalInputWidth);

        calculateAndWriteRoot();

        if(radicantOutput.textContent){
            const additionalOutputWidth=getAdditionalWidthBasedOnElementAndText(radicantOutput, radicantOutput.textContent||"");
            resizeRootCanvasAndContent(radicantOutput, outputRootCanvas, additionalOutputWidth);
        }
    }, 0);
});

indexInput.addEventListener("keydown", e=>{
    setTimeout(()=>{
        calculateAndWriteRoot();
    }, 0);
});




