import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title text', () => {
  render(<App />);
  const textElement = screen.getByText(/Spotify Homage/i);
  expect(textElement).toBeInTheDocument();
});
