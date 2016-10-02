module.exports = class ArrayList {
  constructor () {
    this.length = 0
    this.data = {}
  }

  push (val) {
    this.data[this.length] = val
    this.length += 1
  }

  pop () {
    return this.delete(this.length - 1)
  }

  get (index) {
    return this.data[index]
  }

  delete (index) {
    const val = this.data[index]
    for (; index < this.length; index++) {
      this.data[index] = this.data[index + 1]
    }
    delete this.data[this.length - 1]
    this.length -= 1
    return val
  }
}
