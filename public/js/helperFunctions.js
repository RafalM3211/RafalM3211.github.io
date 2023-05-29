import { indexInput, radicantInput, multiplierOutput, indexOutput, radicantOutput, errorOutput } from "./selectors.js";
export function getIndexAndRadicant() {
    const index = indexInput.valueAsNumber;
    const radicant = radicantInput.valueAsNumber;
    return { index, radicant };
}
export function shouldDrawRootSymbol(root) {
    return !(root.index === 1 || Math.abs(root.radicant) === 1);
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
export function limitInputLengh(input, length) {
    if (input.value.length > 8) {
        input.value = input.value.slice(0, -1);
    }
}
