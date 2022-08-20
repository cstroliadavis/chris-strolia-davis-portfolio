import { render, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup);

test('renders', () => {
  render(<App />);
});
