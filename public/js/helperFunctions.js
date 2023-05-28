import { indexInput, radicantInput, multiplierOutput, indexOutput, radicantOutput, } from "./selectors.js";
import { errorOutput } from "./selectors.js";
export function getIndexAndRadicant() {
    const index = indexInput.valueAsNumber;
    const radicant = radicantInput.valueAsNumber;
    return { index, radicant };
}
export function shouldDrawRootSymbol(root) {
    return !(root.index === 1 || root.radicant === 1);
}
export function clearRootValues() {
    indexOutput.innerText = "";
    radicantOutput.innerText = "";
    multiplierOutput.innerHTML = "";
}
export function writeError(exception) {
    errorOutput.innerHTML = exception;
}
export function clearError() {
    errorOutput.innerHTML = "";
}
