import { render, cleanup } from '@testing-library/react';
import AppCard from './index'

afterEach(cleanup);

const mockApp = Object.freeze({
  id: 1,
  title: 'A Title',
  description: 'One of the things I worked on',
  url: 'https://location.app.com',
  github: 'https://github.com/location/app',
  image: 'https://image.app.com/some-image.jpg',
});

describe('AppCard', () => {
  it('renders', () => {
    render(<AppCard/>)
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<AppCard { ...mockApp }/>);

    expect(asFragment()).toMatchSnapshot();
  });

  it('shows a title', () => {
    const { getByText } = render(<AppCard { ...mockApp }/>);
    const el = getByText('A Title');

    expect(el).toBeTruthy();
    expect(el).toBeInstanceOf(HTMLHeadingElement);
  });

  it('displays a an image for the app', () => {
    const { getByAltText } = render(<AppCard { ...mockApp }/>);
    const el = getByAltText('A Title');

    expect(el).toBeTruthy();
    expect(el).toHaveAttribute('src', 'https://image.app.com/some-image.jpg');
  });

  it('links to an app', () => {
    const { getByAltText } = render(<AppCard { ...mockApp }/>);
    const el = getByAltText('A Title').closest('a');

    expect(el).toHaveAttribute('href', 'https://location.app.com');
  });

  it('links to the repo', () => {
    const { getByText } = render(<AppCard { ...mockApp }/>);
    const el = getByText('See the code');

    expect(el).toBeTruthy();
    expect(el).toHaveAttribute('href', 'https://github.com/location/app');
  });
});
