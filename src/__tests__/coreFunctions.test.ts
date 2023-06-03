import userEvent from '@testing-library/user-event'
import { getInputs, getOutputs } from "./testUtils";



describe("helper functions", ()=>{
  test('calculates and outputs', async () => {
    //arrange
    //dynamic import because while importning DOM selector functions run. Normal imports run before DOM is rendered so selector functions return null
    const { calculateAndWriteRoot } = await import("../coreFunctions"); 
    const user=userEvent.setup();
    const { indexInput, radicantInput }=getInputs();
    const { radicantOutput, multiplierOutput }=getOutputs();
    

    //act
    await user.clear(radicantInput);
    await user.type(radicantInput, "16");
    await user.clear(indexInput);
    await user.type(indexInput, "2");
    calculateAndWriteRoot();
  
    //assert
    expect(radicantOutput.textContent).toEqual("");
    expect(multiplierOutput.textContent).toEqual("4");
  });
})

