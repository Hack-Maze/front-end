import { hello } from "../src/hello_world";

describe("test hello", () => {
  it("should return hello world", () => {
    expect(hello()).toBe("Hello world!");
  });
});

const greeting = 'world';

export function hello(world: string = greeting): string {
    if (world == "Bob") {
        return "Hiya Bob!";
    }
    return `Hello ${world}!`;
}

