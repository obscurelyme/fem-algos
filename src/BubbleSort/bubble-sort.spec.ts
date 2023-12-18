import { bubbleSort } from "./bubble-sort";

describe("Bubble Sort", () => {
  it("should pass", () => {
    const array = [5, 3, 7, 8, 1, 10, 4, 6];

    bubbleSort(array);

    expect(array).toStrictEqual([1, 3, 4, 5, 6, 7, 8, 10]);
  });
});
