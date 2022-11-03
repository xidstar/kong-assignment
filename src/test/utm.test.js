const utm = require('./utm');

test('UTM query parameter contains the UTM source', () => {
  expect(utm()).toMatch(/utm_source=newsletter/);
});


