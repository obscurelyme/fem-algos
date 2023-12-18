import { twoCrystalBall } from "./two-crystyal-balls";

describe("Linear Search", () => {
  it("should pass", () => {
    expect(
      twoCrystalBall([false, false, false, true, true, true, true, true])
    ).toBe(3);
  });
});
