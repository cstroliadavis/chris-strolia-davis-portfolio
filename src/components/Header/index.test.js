import { render, cleanup } from '@testing-library/react';
import Header from './index'

afterEach(cleanup);

const sections = [
  { name: 'about', title: 'About me' },
  { name: 'portfolia', title: 'Portfolio' },
]

const props = { currentSection: sections[0], sections };
const mockSetCurrentSection = jest.fn((section) => { props.currentSection = section });

props.setCurrentSection = mockSetCurrentSection;
describe('Header', () => {
  it('renders', () => {
    render(<Header { ...props }/>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Header { ...props} />);

    expect(asFragment()).toMatchSnapshot();
  });

  it('shows the developer\'s name', () => {
    const { getByText } = render(<Header { ...props }/>);

    expect(getByText('Chris Strolia-Davis')).toBeTruthy();
  });

  it('shows a navigation menu with all sections', () => {
    const { getByText } = render(<Header { ...props } />);

    expect(getByText('About me')).toBeTruthy();
    expect(getByText('Portfolio')).toBeTruthy();
  });
});
