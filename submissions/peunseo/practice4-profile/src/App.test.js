import { render, screen } from '@testing-library/react';
import App from './App';

test('renders profile page heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/프로필 카드/i);
  expect(headingElement).toBeInTheDocument();
});
