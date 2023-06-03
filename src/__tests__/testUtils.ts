import {screen} from "@testing-library/dom";

export function renderCalculator(){
    document.body.innerHTML=`
        <div class="root">
            <input class="index root-input" value="2" type="number" data-testid="index-input" />
            <canvas data-min-width="150" width="150" height="100" id="input-root-canvas"></canvas>
            <input class="radicant root-input" value="8" type="number" data-testid="radicant-input" />
        </div>
        <svg class="equal-sign" xmlns="http://www.w3.org/2000/svg" width="59" height="34" viewBox="0 0 59 34" fill="none">
            <path d="M49.552 0.711998C52.7093 0.711998 55.056 1.05333 56.592 1.736C58.128 2.41866 58.896 3.61333 58.896 5.32C58.896 6.25866 58.5973 7.19733 58 8.136C57.1467 9.84267 55.9093 10.952 54.288 11.464C52.752 11.976 50.8747 12.232 48.656 12.232C46.2667 12.232 43.92 12.104 41.616 11.848C40.848 11.848 39.6107 11.8053 37.904 11.72C36.2827 11.5493 34.7893 11.464 33.424 11.464C30.352 11.464 27.1947 11.592 23.952 11.848C22.8427 11.9333 21.2213 12.0187 19.088 12.104C16.9547 12.1893 15.0347 12.232 13.328 12.232C9.91467 12.232 7.35467 12.104 5.648 11.848C4.02667 11.592 2.832 11.0373 2.064 10.184C1.296 9.33067 0.912 7.96533 0.912 6.088C0.912 3.69866 2.14933 1.94933 4.624 0.839996C5.648 0.498665 6.88533 0.327999 8.336 0.327999C8.93333 0.327999 12.048 0.455999 17.68 0.711998C18.448 0.79733 19.8133 0.92533 21.776 1.096C23.7387 1.26666 25.4027 1.352 26.768 1.352L29.2 1.224C36.368 0.882665 43.152 0.711998 49.552 0.711998ZM49.552 21.96C52.7947 21.96 55.1413 22.2587 56.592 22.856C58.128 23.4533 58.896 24.6053 58.896 26.312C58.896 27.2507 58.5973 28.1893 58 29.128C57.1467 30.8347 55.9093 31.9867 54.288 32.584C52.6667 33.096 50.7893 33.352 48.656 33.352C47.0347 33.352 44.688 33.2667 41.616 33.096C39.056 32.84 36.3253 32.712 33.424 32.712C30.352 32.712 27.1947 32.84 23.952 33.096C22.8427 33.1813 21.2213 33.2667 19.088 33.352C16.9547 33.4373 15.0347 33.48 13.328 33.48C10 33.48 7.48267 33.352 5.776 33.096C4.06933 32.7547 2.832 32.1573 2.064 31.304C1.296 30.3653 0.912 28.9573 0.912 27.08C0.912 24.6907 2.14933 22.9413 4.624 21.832C5.136 21.576 6.37333 21.448 8.336 21.448C10.8107 21.448 13.9253 21.6187 17.68 21.96C22.1173 22.3013 25.36 22.472 27.408 22.472C28.7733 22.472 31.6747 22.3867 36.112 22.216C41.5733 22.0453 46.0533 21.96 49.552 21.96Z"/>
        </svg>
        <div class="output">
            <p class="multiplier-output" data-testid="multiplier-output">2</p>
            <p class="error-output" data-testid="error-output"></p>
            <div class="root">
                <p class="index root-output" data-testid="index-output">2</p>
                <canvas data-min-width="150" width="150" height="100" id="output-root-canvas"></canvas>
                <p class="radicant root-output" data-testid="radicant-output">2</p>
            </div>
        </div>
    `
}

export function getInputs(){
    const indexInput=screen.getByTestId("index-input") as HTMLInputElement;
    const radicantInput=screen.getByTestId("radicant-input") as HTMLInputElement;
    return {indexInput, radicantInput}
}

export function getOutputs(){
    const multiplierOutput=screen.getByTestId("multiplier-output") as HTMLParagraphElement;
    const errorOutput=screen.getByTestId("error-output") as HTMLParagraphElement;
    const indexOutput=screen.getByTestId("index-output") as HTMLParagraphElement;
    const radicantOutput=screen.getByTestId("radicant-output") as HTMLParagraphElement;
    return {multiplierOutput, errorOutput, indexOutput, radicantOutput};
}