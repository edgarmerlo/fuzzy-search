import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { sortByDate, filterResults, fixedISO } from './libraries/libraries'

const transactions = [
  { amount: 15.80, date: '22-06-2017T10:33', card_last_four: '9875' },
  { amount: 28.70, date: '27-01-2011T12:34', card_last_four: '1234' },
  { amount: 22.70, date: '27-01-2012T12:34', card_last_four: '9352' },
];

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('The transactions are sorted by date', () => {
  const sortedResult = sortByDate(transactions);
  const expectedFirstResult = { amount: 28.70, date: '27-01-2011T12:34', card_last_four: '1234' }
  expect(sortedResult[0]).toEqual(expectedFirstResult);
});

it('The results are filtered', () => {
  const searchTerm = '9875'
  const filteredResult = filterResults(transactions, searchTerm);
  expect(filteredResult[0].card_last_four).toBe(searchTerm);
});

it('The ISO format is well formed', () => {
  const givenDate = '22-06-2017T10:33';
  const fixedDate = fixedISO(givenDate);
  expect(fixedDate).toEqual(new Date('2017-06-22T10:33'));
});


