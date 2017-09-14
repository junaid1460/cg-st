var index = require("./../index");
var chai = require("chai");
var expect = chai.expect;

describe("Factorial function test",function(){
    var testInput = 4;
    it("with valid input",function(){
        var testOutput = index.fact(testInput);

        expect(testOutput).to.equal(24);
    });
    testInput = 4;
     it("with invalid input",function(){
        var testOutput = index.fact(testInput);
        expect(testOutput).to.not.equal(0);
    });

})

describe("Add function test",function(){
    var a =10,b=20;
    it("with valid input",function(){
        var testOutput = index.add(a,b);

        expect(testOutput).to.equal(30);
    });
     it("with invalid input",function(){
          var testOutput = index.add(a,40);

        expect(testOutput).to.not.equal(30);
    });
})