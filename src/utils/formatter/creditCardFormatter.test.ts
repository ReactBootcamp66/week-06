import { creditCardFormatter } from "./creditCardFormatter"

describe('creditCardFormatter', () => {
  test('gets formatted value', () => {


    expect(creditCardFormatter('12')).toBe("12");
    expect(creditCardFormatter('1234')).toBe("1234");
    expect(creditCardFormatter('123456')).toBe("1234 56");
    expect(creditCardFormatter('1234 56')).toBe("1234 56");
    expect(creditCardFormatter('1234567890123456')).toBe("1234 5678 9012 3456");

  })
})
