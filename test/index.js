var expect    = require("chai").expect;
var factorial = require("../src/index");

describe("Factorial", function() {
  describe("Calculator factorial a number", function() {
    it("return 'number invalid'", function(done) {
      var result = factorial.calcFactorial('abc');
      expect(result).to.equal("Number invalid");
      done();
    });
    it("return 'number must be an interger'", function(done) {
      var result = factorial.calcFactorial(12.2);
      expect(result).to.equal("Number must be an interger");
      done();
    });
    it("return 1 if number less than or equal to 1", function(done) {
      var result = factorial.calcFactorial(0);
      expect(result).to.equal(1);
      done();
    });
    it("return 120 if number equal to 5", function(done) {
      var result = factorial.calcFactorial(5);
      expect(result).to.equal(120);
      done();
    });
  });
});