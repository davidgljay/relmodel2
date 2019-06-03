const Relmodel = require('../relmodel')

describe('Relmodel', () => {
  let relmodel
  beforeEach(() => {
    relmodel = new Relmodel(4, 10)
  })

  it('should build a model', () => {
    expect(relmodel.nodes.length).toEqual(4)
    expect(relmodel.nodes[0].targets.length).toEqual(4)
    expect(relmodel.dice.length).toEqual(10)
  })

  it('should perform a step', () => {
    relmodel.step()
    expect(relmodel.diceIndex).toEqual(4)
    expect(relmodel.bits.length).toEqual(4)
    for (var i = 0; i < relmodel.nodes.length; i++) {
      expect(relmodel.bits[i].source).toEqual(i)
    }
  })

  it('should perform a bit step', () => {
    relmodel.step()
    relmodel.bitStep()
    for (var i = 0; i < relmodel.bits.length; i++) {
      expect(relmodel.bits[i].complete).toEqual(1)
    }
  })
})
