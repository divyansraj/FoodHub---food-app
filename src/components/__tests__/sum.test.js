import { sum } from "../sum";

test("sum of two positive numbers", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(0,0)).toBe(0);
});
