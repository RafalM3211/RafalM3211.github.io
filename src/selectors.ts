import type { HTMLRootCanvasElement } from "./types"

export const inputRootCanvas=document.querySelector("#input-root-canvas") as HTMLRootCanvasElement;
export const outputRootCanvas=document.querySelector("#output-root-canvas") as HTMLRootCanvasElement;

export const indexInput=document.querySelector(".index") as HTMLInputElement;
export const radicantInput=document.querySelector(".radicant") as HTMLInputElement;

export const multiplierOutput=document.querySelector(".multiplier-output") as HTMLParagraphElement;
export const errorOutput=document.querySelector(".error-output") as HTMLParagraphElement;
export const indexOutput=document.querySelector(".index.root-output") as HTMLParagraphElement;
export const radicantOutput=document.querySelector(".radicant.root-output") as HTMLParagraphElement;