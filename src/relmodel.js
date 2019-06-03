module.exports = class RelModel {

  constructor (length, numDice = 10000000) {
    this.nodes = []
    this.bits = []
    this.dice = []
    this.diceIndex = 0

    for (var i = 0; i < length; i++) {
      this.nodes[i] = {
        stability: 0,
        color: Math.random * 100,
        targets: Array.from({length}, () => 0),
        sum: 0
      }
    }

    for (var i=0; i < numDice; i++) {
      this.dice[i] = Math.random()
    }

    this.step = () => {
      for (var i = 0; i < this.nodes.length; i++) {
        const node = this.nodes[i]
        const diceRoll = this.dice[this.diceIndex] * node.sum
        this.diceIndex++

        let counter = 0
        var j
        for (j = 0; j < node.targets.length; j++) {
          counter += node.targets[j]
          if (counter > diceRoll) {
            break;
          }
        }
        this.bits.push({
          source: i,
          target: j,
          color: node.color,
          complete: 0
        })
      }
    }

    this.bitStep = () => {
      this.bits = this.bits.filter(bit => bit.complete < 100)
      for (var i = 0; i < this.bits.length; i++) {
        const bit = this.bits[i]
        bit.complete++
        if (bit.complete === 100) {
          const similarity = 100 - Math.abs(bit.color - this.nodes[bit.target].color)
          this.nodes[bit.target].targets[bit.source] += similarity
          const colorShift = (bit.color - this.nodes[bit.target].color)/2 *
            Math.abs(bit.color - this.nodes[bit.target].color)/100
          this.nodes[bit.target].color += colorShift
        }
      }
    }
  }
}
