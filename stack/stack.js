class Stack {
  constructor () {
    this.data = ''
    this.length = 0
  }

  push (value) {
    this.data = `${this.data}-${value}`
    this.length++
  }

  pop () {
    const index = this.data.lastIndexOf('-')
    const item = this.data.slice(index + 1)
    this.data = this.data.slice(0, index)
    if (item) {
      this.length--
    }
    return item
  }

  size () {
    return this.length
  }
}

module.exports = Stack
