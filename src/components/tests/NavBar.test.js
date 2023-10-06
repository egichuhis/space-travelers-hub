import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from '../Layout/NavBar';

test('renders the logo and navigation links', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>,
  );

  // Verify that the logo is present
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();

  // Verify that navigation links are present
  const rocketsLink = screen.getByText('Rockets');
  expect(rocketsLink).toBeInTheDocument();

  const missionsLink = screen.getByText('Missions');
  expect(missionsLink).toBeInTheDocument();

  const profileLink = screen.getByText('My Profile');
  expect(profileLink).toBeInTheDocument();
});
