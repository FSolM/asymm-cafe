const cafe = require('../cafe');
const data = require('../files/case2.json');
const expected = require('../files/expected2.json');

test('Checks that the second case returns the correct data', () => {
  expect(cafe.init(data)).toEqual(expected);
});
