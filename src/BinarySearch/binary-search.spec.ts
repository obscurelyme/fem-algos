import binarySearch from "./binary-search";

describe("BinarySearch", () => {
  it("should find an element in an array", () => {
    expect(binarySearch(7, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toBe(true);
  });
});
