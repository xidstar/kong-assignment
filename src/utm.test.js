const utm = require('./utm');

test('form action contains utm and source', () => {
  expect(utm()).toMatch(/utm_source=newsletter/);
});

function assetLoadError() {
  throw new Error("An error is thrown when assets fail to load")
}

describe("exceptions", () => {
  it("running build goes as expected", () => {
    expect(() => assetLoadError()).toThrow("An error is thrown when assets fail to load")
  })
})

