import { expect, assert } from 'chai'
// const assert = require('assert')
import { makeUpperCase, reverseWords } from './main.js'


describe("Convert to UPPERCASE", () => {
    it("should convert all strings to upppercase", () => {
        assert.strictEqual(makeUpperCase(""), "");
        assert.strictEqual(makeUpperCase("hello"), "HELLO");
        assert.strictEqual(makeUpperCase("Hello"), "HELLO");
        assert.strictEqual(makeUpperCase("HELLO"), "HELLO");
    });

    it("should not accept number parameters", () => {
        assert.equal(makeUpperCase(8), 'Numbers are not an acceptable argument')
    })

    it("should not accept more than one parameter", () => {
        assert.strictEqual(makeUpperCase('name', 'name2'), 'NAME', 'This function executes only the first argument')
    })
});

describe("reverseWords", () => {
    it("should reverse the order of the string parameter", () => {
      assert.strictEqual(reverseWords("hello world!"), "world! hello")
      assert.strictEqual(reverseWords("fosa doesn't speak like this"), "this like speak doesn't fosa")
      assert.strictEqual(reverseWords("foobar"), "foobar")
      assert.strictEqual(reverseWords("kata editor"), "editor kata")
      assert.strictEqual(reverseWords("row row row your boat"), "boat your row row row")
      assert.strictEqual(reverseWords(""), "")
    });

    it("should not accept number parameters", () => {
        assert.equal(makeUpperCase(9), 'Numbers are not an acceptable argument')
    })
  });

//   describe("removeVowels", () => {
//     it("should remove each vowel in the string parameter", () => {
//       assert.strictEqual(removeVowels("hello world!"), "hll wrld!")
//       assert.strictEqual(removeVowels("foobar"), "fbr")
//       assert.strictEqual(removeVowels("editor"), "dtr")
//       assert.strictEqual(removeVowels("vowels"), "vwls")
//       assert.strictEqual(removeVowels("i"), "")
//     });

//     it("should not accept number parameters", () => {
//         assert.equal(makeUpperCase(9), 'Numbers are not an acceptable argument')
//     })

//     it("should handle uppercase strings", () => {
//         assert.equal(makeUpperCase('Efosa'), 'fs')
//     })
//   });

// describe('Application can perform addition', () => {
//     it('should add numbers', () => {
//         // assert.equal(2 + 5, 7, "Addition wrong")
//         // expect(add(2, 5)).to.equal(7);
//         assert.strictEqual(add(2, 8), 10, "Wrong Result")
//     })
//     // it('should only add numbers', () => {
//     //     expect(add('5', 10)).to.equal('Parameter is not a number')
//     // })
// })
// describe('Application can perform MULTIPLICATION', () => {
    //     it('should multiply numbers', () => {
//         // expect(multiply(5, 10).to.equal(50))
//         assert.strictEqual(multiply(5, 20), 100, 'Check that parameters are numbers')
//     })
//     it('should only add numbers', () => {
//         assert.equal(multiply(5, '9'), 'Strings are not an acceptable argument')
//     })
//     it('Undefined is not an accepted result', () => {
//         assert.equal(multiply(2, 8), 16, 'Result is UNDEFINED')
//     })
// })