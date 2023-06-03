import type { HTMLRootCanvasElement } from "../types";

export function mockSelectors(){
  const input=document.createElement("input");
  input.type="number";
  input.value="2";

  return {
    multiplierOutput: document.createElement("p"),
    indexOutput: document.createElement("p"),
    radicantOutput: document.createElement("p"), 
    errorOutput: document.createElement("p"),
    indexInput: input,
    radicantInput: input.cloneNode(true) as HTMLInputElement,
    outputRootCanvas: mockCanvas(),
    inputRootCanvas: mockCanvas()
  }
}
  
export function mockCanvas(): HTMLRootCanvasElement{
  const canvas=document.createElement("canvas");
  canvas.width=150;
  canvas.height=100;
  canvas.dataset.minWidth="150";

  return canvas as HTMLRootCanvasElement;
}