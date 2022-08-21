import { render, cleanup, fireEvent } from '@testing-library/react';
import Navigation from './index'

afterEach(cleanup);

const sections = Object.freeze([
  Object.freeze({ name: 'about', title: 'About me' }),
  Object.freeze({ name: 'profile', title: 'Profile' }),
]);

const mockSetCurrentSection = jest.fn();
const props = Object.freeze({
  currentSection: sections[0],
  setCurrentSection: mockSetCurrentSection,
  sections,
});

describe('Navigation', () => {
  it('renders', () => {
    render(<Navigation {...props}/>)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Navigation {...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('Sets the corresponding section when menu item is clicked', () => {
    const { getByText } = render(<Navigation {...props} />);

    fireEvent.click(getByText('Profile'));

    expect(mockSetCurrentSection).toHaveBeenCalledTimes(1);
    expect(mockSetCurrentSection).toHaveBeenCalledWith(sections[1]);
  });
});
