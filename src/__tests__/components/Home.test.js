// __tests__/Home.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../components/Home';

describe('Home Component', () => {
  test('renders home page with navbar', () => {
    const user = { email: 'testuser@example.com' };
    const mockOnLogout = jest.fn();

    render(
      <Router>
        <Home user={user} onLogout={mockOnLogout} />
      </Router>
    );

    // Verify home page content
    expect(screen.getByText('Home Page')).toBeInTheDocument();

    // Verify Navbar is rendered
    expect(screen.getByText('Your App')).toBeInTheDocument();
  });

  test('toggles details on button click', () => {
    const user = { email: 'testuser@example.com' };
    const mockOnLogout = jest.fn();

    render(
      <Router>
        <Home user={user} onLogout={mockOnLogout} />
      </Router>
    );

    const toggleButton = screen.getByText('Show Details');
    expect(toggleButton).toBeInTheDocument();

    // Click to show details
    fireEvent.click(toggleButton);
    expect(screen.getByText('Hide Details')).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();

    // Click to hide details
    fireEvent.click(screen.getByText('Hide Details'));
    expect(screen.getByText('Show Details')).toBeInTheDocument();
    expect(screen.queryByText(user.email)).not.toBeInTheDocument();
  });
});
