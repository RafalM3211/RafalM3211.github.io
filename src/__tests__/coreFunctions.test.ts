import { mockCanvas, mockSelectors } from "./testUtils";
import { drawRoot } from '../rootCanvas';
import {
  multiplierOutput,
  radicantOutput,
  indexInput,
  radicantInput
} from "../selectors";
import { calculateAndWriteRoot, writeRoot } from "../coreFunctions";

jest.mock("../rootCanvas");
jest.mock("../selectors", ()=>{
  return {
    __esModule: true,
    ...mockSelectors(),
  };
});
 
test('calculates and outputs', async () => {
  //arrange

  //act
  radicantInput.value="16";
  indexInput.value="2"; 
  calculateAndWriteRoot();

  //assert
  expect(radicantOutput.textContent).toEqual("");
  expect(multiplierOutput.textContent).toEqual("4");
});


const dataProvider=[
  {
    description: "draws root symbol, multiplier, index and radicant when should",
    shouldDrawSymbol: true,
    root: {
      multiplier: 4,
      index: 2,
      radicant: 2
    }
  },
  {
    description: "draws root symbol, index, radicant and omits multiplier when should",
    shouldDrawSymbol: true,
    root: {
      multiplier: 1,
      index: 2,
      radicant: 2
    }
  },
  {
    description: "draws multiplier and omits root symbol when should",
    shouldDrawSymbol: false,
    root: {
      multiplier: 4,
      index: 2,
      radicant: 1
    }
  }
]

dataProvider.forEach(data=>{
  test(data.description, () => {
    //arrange
    const canvas=mockCanvas();
    const drawRootMock=drawRoot as jest.Mock;
    
    //act
    writeRoot(canvas, data.root);
  
    //assert
    expect(drawRootMock).toBeCalledTimes(data.shouldDrawSymbol? 1:0);
    expect(multiplierOutput.textContent).toEqual(parseForRootOutput(data.root.multiplier));
    expect(radicantOutput.textContent).toEqual(parseForRootOutput(data.root.radicant));

    drawRootMock.mockClear();
  });
})


function parseForRootOutput(number: number){
  if(number===1) return "";
  else return number+""
}



