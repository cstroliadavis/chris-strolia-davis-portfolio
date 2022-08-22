import { render, cleanup } from '@testing-library/react';
import Contact from './index'

afterEach(cleanup);

describe('Contact', () => {
  it('renders', () => {
    render(<Contact/>)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact/>);

    expect(asFragment()).toMatchSnapshot();
  });

});
