export default class RelModel {

  constructor (length, colorCoefficient = .1, numDice = 1) {
    this.nodes = []
    this.bits = []
    this.dice = []
    this.diceIndex = 0

    for (var i = 0; i < length; i++) {
      this.nodes[i] = {
        stability: 0,
        color: Math.random() * 360,
        targets: Array.from({length}, () => 0.1),
        sum: .1 * length,
        max: .1
      }
    }

    for (var j=0; j < numDice; j++) {
      this.dice[j] = Math.random()
    }

    this.normalize = (node) => {
      let sum = 0
      node.max = 0
      node.entropy = 0
      node.targets.forEach(t => sum += t)
      for (var i = 0; i < length; i++) {
        node.targets[i] = node.targets[i]/sum
        node.entropy += Math.abs(Math.log1p(node.targets[i]))
        if (node.targets[i] > node.max) {
          node.max = node.targets[i]
        }
      }
    }

    this.step = (i) => {
      const node = this.nodes[i]
      if (!node) {
        console.error('Node not found');
        debugger;
      }

      const diceRoll = this.diceIndex >= this.dice.length ? Math.random() : this.dice[this.diceIndex]
      this.diceIndex++
      var j
      var counter = 0
      for (j = 0; j < length - 1; j++) {
        counter += node.targets[j]
        if (counter > diceRoll && i !== j) {
          break;
        }
      }
      if (i===j) {
        j = 0
      }
      this.bits.push({
        source: i,
        target: j,
        color: node.color,
        complete: 0
      })
    }

    this.bitStep = () => {
      this.bits = this.bits.filter(bit => bit.complete < 100)
      for (var i = 0; i < this.bits.length; i++) {
        const bit = this.bits[i]
        bit.complete += 1
        if (bit.complete === 100) {
          const similarity = 360 - Math.abs(bit.color - this.nodes[bit.target].color) * colorCoefficient
          this.nodes[bit.target].targets[bit.source] += similarity/500
          this.normalize(this.nodes[bit.target])
          const colorShift = (bit.color - this.nodes[bit.target].color)/2 *
            Math.abs(bit.color - this.nodes[bit.target].color)/100
          this.nodes[bit.target].color = (this.nodes[bit.target].color + colorShift) % 360
        }
      }
    }
  }
}
