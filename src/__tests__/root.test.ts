import {screen} from "@testing-library/dom";
import "@testing-library/jest-dom"


test('use jsdom in this test file', () => {
    document.body.innerHTML=`
      <div>affsd</div>
    `

    const a = screen.queryByText("affsd");
    expect(a).toBeInTheDocument();
  });