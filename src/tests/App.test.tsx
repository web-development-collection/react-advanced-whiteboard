import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders react advanced whiteboard', () => {
  render(<App />);
  const linkElement = screen.getByText(/React Advanced Whiteboard/i);
  expect(linkElement).toBeInTheDocument();
});
