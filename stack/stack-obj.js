class Stack {
  constructor (capacity) {
    this.data = {}
    this.length = 0
    this.capacity = capacity
  }

  push (value) {
    if (this.length + 1 > this.capacity) {
      return 'Max capacity already reached. Remove remove element before adding a new one.'
    }
    this.data[this.length] = value
    this.length++
  }

  pop () {
    const value = this.data[this.length - 1]
    if (value) {
      delete this.data[this.length - 1]
      this.length--
      return value
    }
  }

  peek () {
    return this.data[this.length - 1]
  }

  contains (value) {
    for (let key in this.data) {
      if (this.data[key] === value) {
        return !!this.data[key]
      }
    }
    return false
  }

  until (value) {
    let iteration = 0
    for (let key in this.data) {
      iteration++
      if (this.data[key] === value) {
        return iteration
      }
    }
  }

  count () {
    return this.length
  }
}

module.exports = Stack
