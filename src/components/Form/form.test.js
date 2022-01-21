import {render, screen} from '@testing-library/react';
import Form from './form'

test("Test 1", () => {
  const {getByTestId, getByLabelText} = render(<Form />);

    const nameLabel = getByLabelText(/Email/i);
    const passwordLabel = getByLabelText(/Password/i);

    expect(nameLabel).toBeInTheDocument();
    expect(passwordLabel).toBeInTheDocument();

    const input = getByLabelText(/Email/i);
    expect(input).toHaveAttribute('type', 'email');
})

test("Test 2", () => {
    const {getByTestId, getByLabelText} = render(<Form />);
  
      const nameLabel = getByLabelText(/Email/i);
      const passwordLabel = getByLabelText(/Password/i);
  
      expect(nameLabel).toBeInTheDocument();
      expect(passwordLabel).toBeInTheDocument();
  
      const input = getByLabelText(/Password/i);
      expect(input).toHaveAttribute('type', 'password');
  })