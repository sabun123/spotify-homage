import { render, screen } from '@testing-library/react';
import Card from '../index';

it('displays card correctly', () => {
  render(<Card />);
  let imageElement = screen.getByRole('img', { alt: 'albumcover' });
  expect(imageElement).toBeInTheDocument();
});
