import { render } from '@testing-library/react';
import App from './App';

test('should generate a snapshot for app component', () => {
  const { asFragment } = render(<App />);
  expect(asFragment(<App/>)).toMatchSnapshot()
});
