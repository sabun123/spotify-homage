import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SideBar from '../index';

it('sidebar displays discover button correctly', () => {
  render(
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>
  );
  let discoverButton = screen.getByRole('button', { name: 'Discover' });
  expect(discoverButton).toBeInTheDocument();
});

it('sidebar displays search button correctly', () => {
  render(
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>
  );
  let searchButton = screen.getByRole('button', { name: 'Search' });
  expect(searchButton).toBeInTheDocument();
});

it('sidebar displays favourites button correctly', () => {
  render(
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>
  );
  let favButton = screen.getByRole('button', { name: 'Favourites' });
  expect(favButton).toBeInTheDocument();
});

it('sidebar displays playlists button correctly', () => {
  render(
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>
  );
  let playlistButton = screen.getByRole('button', { name: 'Playlists' });
  expect(playlistButton).toBeInTheDocument();
});

it('sidebar displays charts button correctly', () => {
  render(
    <MemoryRouter>
      <SideBar />
    </MemoryRouter>
  );
  let chartButton = screen.getByRole('button', { name: 'Charts' });
  expect(chartButton).toBeInTheDocument();
});
