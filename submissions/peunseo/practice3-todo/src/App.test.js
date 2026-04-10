import { render, screen } from '@testing-library/react';
import App from './App';

test('renders todo list title', () => {
  render(<App />);
  const titleElement = screen.getByText(/todo 리스트/i);
  expect(titleElement).toBeInTheDocument();
});