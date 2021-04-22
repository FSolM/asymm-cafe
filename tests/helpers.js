const beverageTime = require('../helpers/getBeverageTime');

test('Correct preparation time for a beverage', () => {
  expect(beverageTime.get('tea')).toEqual(3);

  expect(beverageTime.get('latte')).toEqual(4);

  expect(beverageTime.get('affogato')).toEqual(7);
});
