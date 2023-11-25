// myTestFile.test.js

// eslint-disable-next-line no-undef
test("Example test using mock function", () => {
  // You can use the mockFunction here
  // eslint-disable-next-line no-undef
  global.mockFunction.mockReturnValue("Mocked value");

  // Your test assertions using the mocked function
  // eslint-disable-next-line no-undef
  expect(global.mockFunction()).toBe("Mocked value");
});
