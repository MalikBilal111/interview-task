import { render, fireEvent, screen } from "@testing-library/react";
import QuantityHandler from "./index";

//test block
test("increments counter", () => {
// render the component on virtual dom
render(<QuantityHandler />);

//select the elements you want to interact with
const counter = screen.getByTestId("counter");
const incrementBtn = screen.getByTestId("increment");

//interact with those elements
fireEvent.click(incrementBtn);

//assert the expected result
expect(counter).toHaveValue("1");
// expect(screen.getByTestId('input', { name: 'Quantity Counter' })).toHaveValue('1');
});