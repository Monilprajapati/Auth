// __tests__/Login.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../../components/Login';

const mockOnLogin = jest.fn();

describe('Login Component', () => {
  test('renders login form and handles login', () => {
    render(
      <Router>
        <Login onLogin={mockOnLogin} />
      </Router>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    // Verify inputs and button
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    // Click login button
    fireEvent.click(loginButton);

    // Verify login handler was called
    expect(mockOnLogin).toHaveBeenCalledWith({
      email: 'testuser@example.com',
      password: 'testpassword'
    });
  });
});
