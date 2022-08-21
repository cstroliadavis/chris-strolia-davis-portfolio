import { render, cleanup } from '@testing-library/react';
import Header from './index'

afterEach(cleanup);

describe('Header', () => {
  it('renders', () => {
    render(<Header />);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Header />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('shows the developer\'s name', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Chris Strolia-Davis')).toBeTruthy();
  });

  it('shows a navigation menu', () => {
    const { getByText } = render(<Header />);

    expect(getByText('About me')).toBeTruthy();
    expect(getByText('Portfolio')).toBeTruthy();
    expect(getByText('Contact')).toBeTruthy();
    expect(getByText('Résumé')).toBeTruthy();
  });
});
