// __tests__/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders login page and navigates to home page after login', () => {
    render(
        <App />
    );

    // Verify login page content
    expect(screen.getByTestId('heading')).toBeInTheDocument();

    // Simulate user input and login
    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'testuser@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'testpassword' } });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    // Verify home page content after login
    expect(screen.getByText('Home Page')).toBeInTheDocument();
  });
});
