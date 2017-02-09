
describe("Fizz Buzz tests ", function() {
 var fizzbuzz = new FizzBuzz();
  it("should return `Fizz` for number divisible by 3", function() {
    expect(fizzbuzz.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(fizzbuzz.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(fizzbuzz.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(fizzbuzz.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(fizzbuzz.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(fizzbuzz.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(fizzbuzz.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(fizzbuzz.fizzBuzz(101)).toBe(101);
  });
    it("should return 77 since its indivisible by 3 and 5", function() {
    expect(fizzbuzz.fizzBuzz(77)).toBe(77);
  });
  it("should return 'Fizz' since for 777", function() {
    expect(fizzbuzz.fizzBuzz(777)).toBe('Fizz');
  });


});
