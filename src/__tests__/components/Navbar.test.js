// __tests__/Navbar.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../components/Navbar';

const mockOnLogout = jest.fn();

describe('Navbar Component', () => {
  test('renders navbar with username and handles logout', () => {
    const user = { email: 'testuser@example.com' };

    render(
      <Router>
        <Navbar user={user} onLogout={mockOnLogout} />
      </Router>
    );

    // Verify username is displayed
    expect(screen.getByText('testuser')).toBeInTheDocument();

    // Click logout button
    fireEvent.click(screen.getByText('Logout'));

    // Verify logout handler was called
    expect(mockOnLogout).toHaveBeenCalled();
  });
});
