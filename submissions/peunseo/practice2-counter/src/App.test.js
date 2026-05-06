import { render, screen } from '@testing-library/react';
import App from './App';

test('renders counter controls', () => {
  render(<App />);
  expect(screen.getByText(/count:/i)).toBeInTheDocument();
  expect(screen.getAllByRole('button')).toHaveLength(5);
});
