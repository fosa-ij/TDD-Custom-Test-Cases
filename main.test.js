import { expect, assert } from 'chai'
// const assert = require('assert')
import { add } from './main.js'

describe('Application can perform addition', () => {
    it('should add numbers', () => {
        // assert.equal(2 + 5, 7, "Addition wrong")
        // expect(add(2, 5)).to.equal(7);
        assert.strictEqual(add(2, 8), 10, "Wrong Result")
    })
    // it('should only add numbers', () => {
    //     expect(add('5', 10)).to.equal('Parameter is not a number')
    // })
})

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