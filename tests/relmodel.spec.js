const Relmodel = require('../relmodel')

describe('Relmodel', () => {
  it('should build a model', () => {
    const relmodel = new Relmodel()
    relmodel.buildModel(4)
    expect(false).toBeTruthy()
  })
})
