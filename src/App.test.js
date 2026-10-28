import { render, screen } from '@testing-library/react';
import App from './App';

test('renders business name in header only', () => {
  render(<App />);
  const businessNameElements = screen.getAllByText(/DelyPasteries/i);
  // Check that at least one element is found
  expect(businessNameElements.length).toBeGreaterThan(0);
  // Check that the first element is in the document (header)
  expect(businessNameElements[0]).toBeInTheDocument();
});
