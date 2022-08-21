import { render, cleanup, act } from '@testing-library/react';
import Portfolio from './index'

beforeAll(jest.useFakeTimers);
afterAll(jest.useRealTimers);

afterEach(cleanup);

const mockApplications = Object.freeze([
  Object.freeze({
    id: 1,
    title: 'Stuff',
    description: 'Things',
    url: 'https://app-url.com',
    image: 'https://image-url.com',
    github: 'https://githb-url.com',
  }),
  Object.freeze({
    id: 2,
    title: 'Mo Stuff',
    description: 'Mo Things',
    url: 'https://app-url.com/mo',
    image: 'https://image-url.com/mo-stuff.png',
    github: 'https://githb-url.com/mo',
  }),
]);

jest.mock('../../../services/applications.repository', () => ({
  getAllApplications: () => new Promise(resolve =>
    setTimeout(() => resolve(mockApplications), 1000)
  )
}));

describe('Portfolio', () => {
  it('renders', async () => {
    act(() => {
      render(<Portfolio/>)
    });
  });

  it('matches snapshot', async () => {
    let res = null;
    act(() => {
      res = render(<Portfolio/>)
    });
    await act(async () => {
      await jest.advanceTimersByTime(1500)
    });
    expect(res.asFragment()).toMatchSnapshot();
  });

  it('shows a spinner while it waits', () => {
    let res = null;
    act(() => {
      res = render(<Portfolio/>)
    });
    expect(res.asFragment()).toMatchSnapshot();
  });
});
