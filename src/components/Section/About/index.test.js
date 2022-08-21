import { render, cleanup } from '@testing-library/react';
import About from './index'

afterEach(cleanup);

describe('About', () => {
  it('renders', () => {
    render(<About />)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<About/>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('has an image of the portfolio owner', () => {
    const { getByAltText } = render(<About />);

    expect(getByAltText('Portrait of Chris Strolia-Davis')).toBeTruthy();
  });

  it('contains a bio of the portfolio owner', () => {
    const { getByText } = render(<About />);

    expect(getByText(/Chris has been developing/)).toBeTruthy();
  });
});
