import { render, screen } from '@testing-library/react';
import HeroBanner from '../index';

it('renders hero banner properly', () => {
  render(<HeroBanner />);
  let textElement = screen.getByText(/Your favourite tunes/i);
  expect(textElement).toBeInTheDocument();
});
