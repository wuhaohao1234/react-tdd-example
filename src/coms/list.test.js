import { render } from '@testing-library/react';
import List from './list';

test('should render list component', () => {
    const view = render(<List />);
    expect(view).toBeTruthy();
})
test('renders data correctly', () => {
  const fakeData = [{
      item: 'item 1',
  },
  {
      item: 'item 2',
  },
  {
      item: 'item 3',
  }]
  const {getAllByTestId} = render(<List />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const itemNames = getAllByTestId('single-item').map(li => li.textContent)
  const fakeItems = fakeData.map(c => c.item)
  expect(itemNames).toEqual(fakeItems)
})
test('Total length of list should be 3', () => {
  const {getByTestId} = render(<List />)
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const listUl = getByTestId('item-list-wrap');
  // eslint-disable-next-line testing-library/no-node-access
  expect(listUl.children.length).toBe(3);
})