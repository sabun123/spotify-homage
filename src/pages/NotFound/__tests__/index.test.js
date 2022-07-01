import { render, screen } from '@testing-library/react';
import NotFound from '../index';

it('renders not found screen', () => {
  render(<NotFound />);
  const textElement = screen.getByText(/Page does not exist!/i);
  expect(textElement).toBeInTheDocument();
});
