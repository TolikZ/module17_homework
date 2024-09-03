const multiply = require('./../index.js');

xdescribe("test multiply", () => {
  // x отключает тест или блок тестов
  xit('multiply 1 * 0 to equal 0', () => {
    expect(multiply(1, 0)).toBe(0);
  });
  it('multiply 1 * 1 to equal 1', () => {
    expect(multiply(1, 1)).toBe(1);
  });
});