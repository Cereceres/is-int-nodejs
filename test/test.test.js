const isInt = require('../index');

const assert = require('assert')

describe('isInt function', function () {
    it('should return true for 1', () => {
      assert(isInt(1))
    })

    it('should return false for 1.001', () => {
      assert(!isInt(1.001))
    })

    it('should return true for "1"', () => {
      assert(isInt("1"))
    })

    it('should return false for "1.001"', () => {
      assert(!isInt("1.001"))
    })
})