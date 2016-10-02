class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  push (value) {
    const node = new Node(value)
    this.length++
    if (!this.head) {
      this.head = node
    } else {
      this.tail.next = node
    }
    this.tail = node
  }

  pop () {
    return this.delete(this.length - 1)
  }

  get (index) {
    const node = this._find(index, this._testIndex)
    if (node) {
      return node.value
    }
    return null
  }

  delete (index) {
    if (index === 0) {
      const head = this.head
      if (head) {
        this.head = this.head.next
      } else {
        this.head = this.tail = null
      }
      this.length--
      return head.value
    }
    const node = this._find(index - 1, this._testIndex)
    const toDelete = node.next
    if (!toDelete) return null
    node.next = toDelete.next
    if (node.next && !node.next.next) this.tail = node.next
    this.length--
    return toDelete.value
  }

  _find (value, test = this._test) {
    let current = this.head
    let i = 0
    while (current) {
      if (test(value, current.value, i, current)) {
        return current
      }
      current = current.next
      i++
    }
    return null
  }

  _test (a, b) {
    return a === b
  }

  _testIndex (search, _, i) {
    return search === i
  }
}

module.exports = LinkedList
