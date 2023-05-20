const contextIsNullError = new Error("root canvas context is null");
export function drawRoot(canvas, additionalWidthLeft = 0, additionalWidthRight = 0) {
    const width = canvas.width;
    const height = canvas.height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
        throw contextIsNullError;
    }
    ctx.beginPath();
    ctx.moveTo(15 - additionalWidthLeft, height * 0.5);
    ctx.lineTo(40, height * 0.5);
    ctx.lineTo(60, height);
    ctx.lineTo(80, 5);
    ctx.lineTo(width + additionalWidthRight, 5);
    ctx.stroke();
}
