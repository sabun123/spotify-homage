import { render, screen } from '@testing-library/react';
import SideBar from '../index';

it('sidebar displays discover button correctly', () => {
  render(<SideBar />);
  let discoverButton = screen.getByRole('button', { name: 'Discover' });
  expect(discoverButton).toBeInTheDocument();
});

it('sidebar displays search button correctly', () => {
  render(<SideBar />);
  let searchButton = screen.getByRole('button', { name: 'Search' });
  expect(searchButton).toBeInTheDocument();
});

it('sidebar displays favourites button correctly', () => {
  render(<SideBar />);
  let favButton = screen.getByRole('button', { name: 'Favourites' });
  expect(favButton).toBeInTheDocument();
});

it('sidebar displays playlists button correctly', () => {
  render(<SideBar />);
  let playlistButton = screen.getByRole('button', { name: 'Playlists' });
  expect(playlistButton).toBeInTheDocument();
});

it('sidebar displays charts button correctly', () => {
  render(<SideBar />);
  let chartButton = screen.getByRole('button', { name: 'Charts' });
  expect(chartButton).toBeInTheDocument();
});
