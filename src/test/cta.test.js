test('hero section CTAs match', () => {
  const cta = {btnPrimary: "Get a Demo"};
  cta["btnSecondary"] = "Start for Free";
  expect(cta).toEqual({btnPrimary: "Get a Demo", btnSecondary: "Start for Free"});
});