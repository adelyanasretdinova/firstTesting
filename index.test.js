// test results for index.js
const addNumbers = require("./index"); //importing the function from index.js - we should write it like this
// function to add 2 numbers and return sum

describe("a function to add 2 numbers", () => {
  it("adds two positive numbers", () => {
    //act: call function with 2 values
    let result = addNumbers(1, 1);
    // assert:check expectation
    expect(result).toEqual(2);
  });
  test("adds other two positive numbers", () => {
    //act: call function with 2 values
    let result = addNumbers(1, 2);
    // assert:check expectation
    expect(result).toEqual(3);
  });
  it("doesnt add if first parameter is not a number", () => {
    //act: call function with 2 values
    let result = addNumbers("a", 1);
    // assert:check expectation
    expect(result).toEqual("parameter needs to be a positive number");
  });
  it("doesnt add if second parameter is not a number", () => {
    //act: call function with 2 values
    let result = addNumbers(1, "a");
    // assert:check expectation
    expect(result).toEqual("parameter needs to be a positive number");
  });
  it("doesnt add if first parameter is not a positive number", () => {
    //act: call function with 2 values
    let result = addNumbers(-1, 2);
    // assert:check expectation
    expect(result).toEqual("parameter needs to be a positive number");
  });
  it("doesnt add if second parameter is not a positive number", () => {
    //act: call function with 2 values
    let result = addNumbers(4, -2);
    // assert:check expectation
    expect(result).toEqual("parameter needs to be a positive number");
  });
});
