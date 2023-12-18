import { linearSearch } from "./linear-search";

describe("Linear Search", () => {
  it("should pass", () => {
    expect(linearSearch(5, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(true);
  });
});
