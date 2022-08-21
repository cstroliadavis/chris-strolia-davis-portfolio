import { render, cleanup } from '@testing-library/react';
import Section from './index'

afterEach(cleanup);

describe('Section', () => {
  it('renders', () => {
    render(<Section currentSection={{ name: 'about' }} />)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Section currentSection={{ name: 'about' }}/>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('handles when section does not exist', () => {
    const { getByText } = render(<Section currentSection={{ name: 'stuff', title: 'Stuff n Things' }}/>);

    expect(getByText('Stuff n Things')).toBeTruthy();
  });
});
