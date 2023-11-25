// eslint-disable-next-line no-undef
test("Example test using mock function", () => {
  // eslint-disable-next-line no-undef
  global.mockFunction.mockReturnValue("Mocked value");

  // eslint-disable-next-line no-undef
  expect(global.mockFunction()).toBe("Mocked value");

  console.log("Hello, World!");
});
