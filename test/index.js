var expect    = require("chai").expect;
var calcFactorial = require("../src/index");

describe("Factorial", function() {
  describe("Calculator factorial a number", function() {
    it("return 'number invalid'", function(done) {
      var result = calcFactorial('abc');
      expect(result).to.equal("number invalid");
      done();
    });
    it("return 'number must be interger'", function(done) {
      var result = calcFactorial(12.2);
      expect(result).to.equal("number must be interger");
      done();
    });
  });
});