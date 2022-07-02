import { render, screen } from '@testing-library/react';
import List from '../index';

it('renders list correctly', () => {
  let mockData = {
    title: 'Released this week',
    data: [
      {
        name: 'Moon Album',
        images: [{ url: '/src/assets/banner.png' }],
        id: 'abc',
      },
    ],
  };
  render(<List listData={mockData} />);
  let titleElement = screen.getByText(/Released this week/i);
  expect(titleElement).toBeInTheDocument();
});
