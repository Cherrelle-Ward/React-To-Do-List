import App from "./App";
import {
  render,
  screen,
  fireEvent
} from '@testing-library/react';



// SUBMIT BUTTON
test("render the Submit button", () => {
  render( < App / > )
  const element = screen.getByText("+")
  expect(element).toBeInTheDocument()
})
// H1 CHECK
test('renders the header', () => {
  render( < App / > );
  const element = screen.getByText(/SHOPPING LIST/i);
  expect(element).toBeInTheDocument();
});

// DELETE BUTTON
test("fireEvent on submit button", () => {
  render( < App / > )
  const submitButton = screen.getByText("+")
  fireEvent.click(submitButton)
  const deleteButton = screen.getByText("-")
  expect(deleteButton).toBeInTheDocument()
})

//   input value
test('input value is rendered', () => {
  render( < App / > )
  const inputElement = screen.getByPlaceholderText("Add Item here...")
  fireEvent.change(inputElement, {
    target: {
      value: "cake"
    }
  })
  expect(inputElement.value).toBe("cake")
})