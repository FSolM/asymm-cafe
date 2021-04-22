const cafe = require('../cafe');
const data = require('../files/case1.json');
const expected = require('../files/expected1.json');

test('Checks that the first case returns the correct data', () => {
  expect(cafe.init(data)).toEqual(expected);
});
