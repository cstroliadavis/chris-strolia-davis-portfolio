import { render, cleanup } from '@testing-library/react';
import Resume from './index'

afterEach(cleanup);

describe('Resume', () => {
  it('renders', () => {
    render(<Resume/>)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Resume/>);

    expect(asFragment()).toMatchSnapshot();
  });
});
