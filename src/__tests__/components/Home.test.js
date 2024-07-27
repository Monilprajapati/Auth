// __tests__/Home.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
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
});
