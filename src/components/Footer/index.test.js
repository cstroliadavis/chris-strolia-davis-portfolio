import { render, cleanup } from '@testing-library/react';
import Footer from './index'

afterEach(cleanup);

describe('Footer', () => {
  it('renders', () => {
    render(<Footer/>)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Footer/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
