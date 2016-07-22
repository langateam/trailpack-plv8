'use strict'

const assert = require('assert')
const PLV8 = require('plv8')

describe('Trailpack', () => {
  let pack
  before(() => {
    pack = global.app.packs.plv8
  })
  it.skip('TODO should be loaded into the app.packs collection', () => {
    assert(pack)
  })
  describe('#validate', () => {
    it.skip('TODO test')
  })
  describe('#configure', () => {
    it.skip('TODO test')
  })
  describe('#initialize', () => {
    it('should instantiate PLV8', () => {
      assert(pack.plv8 instanceof PLV8)
    })
  })
})
