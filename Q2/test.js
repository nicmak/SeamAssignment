var assert = require("chai").assert
var fizzBuzz = require("../FizzBuzz.js")

describe("CheckNumbers", () => {
	it("returns Fizz if test is divisible by 3", () => {
		let number = 6;
		assert.equal('Fizz',fizzBuzz(number), "Not Divisible by 3")
	})

	it("returns Buzz if test is divisible by 5", () => {
		let number = 10;
		assert.equal('Buzz',fizzBuzz(number),'Not Divisible by 5')
	})

	it("returns Fizz if test is divisible by 3 and 5", () => {
		let number = 15;
		assert.equal("Fizz",fizzBuzz(number), "Not Divisible by 5 and 3")
	})

	it("returns empty string if value neither divisible by 3 or 5", () => {
		let number = 7
		assert.equal("", fizzBuzz(number), "Not divisible by 5 or 3")
	})

	it("returns empty string if value is not a number", ()=>{
		let number = "Hello"
		assert.isNotNaN(fizzBuzz(number), "You inputted a number")
	})
})


///This is based on using Mocha Testing Framework along
// with using Chai assertion library