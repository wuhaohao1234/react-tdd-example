/* eslint-disable testing-library/prefer-presence-queries */
import { render, fireEvent } from '@testing-library/react';
import { Button } from './button';

const defaultProps = { 
  onClick: jest.fn(),
  text: "Submit" ,
};

test('should render button components', () => {
  const view = render(<Button />)
  expect(view).toBeTruthy()
})

test('should render button text is Submit', () => {
  const {queryByText, rerender }= render(<Button {...defaultProps} />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(queryByText('Submit')).toBeTruthy()
  rerender(<Button text="Go" />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  expect(queryByText('Go')).toBeTruthy()
})
test('calls correct function on click', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button {...defaultProps} onClick={onClick} />)
    // eslint-disable-next-line testing-library/prefer-screen-queries
    fireEvent.click(getByText(defaultProps.text));
    expect(onClick).toHaveBeenCalled();
});

test('The button should be enabled', () => {
    const { getByText } = render(<Button {...defaultProps} />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    expect(getByText(defaultProps.text)).not.toHaveAttribute('disabled')
});