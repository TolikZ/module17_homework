import { getPercents } from "../../utils/getPercents.js";

const percent = 30;
const number = 200;

describe("Тестируем getPercents.js", () => {
  it("Если введены корректные данные", () => {
    expect(getPercents(percent, number)).toBe(60);
  });
  it("Если одно из чисел равно 0", () => {
    expect(getPercents(0, number)).toBe(0);
    expect(getPercents(percent, 0)).toBe(0);
  });
  it("Если введены не корректные данные или данные не были введены", () => {
    expect(getPercents()).toBe(NaN);
    expect(getPercents(0, "abc")).toBe(NaN);
  });
});