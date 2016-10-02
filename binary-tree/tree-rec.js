class Tree {
  constructor () {
    this.root = null
  }

  toObject () {
    return this.root
  }

  add (value) {
    if (!this.root) {
      this.root = new Node(value)
      return
    }
    this._addRec(value, this.root)
  }

  _addRec (value, node) {
    if (value < node.value && !node.left) {
      node.left = new Node(value)
      return
    } else if (value > node.value && !node.right) {
      node.right = new Node(value)
      return
    }
    this._addRec(value, value < node.value ? node.left : node.right)
  }
}

class Node {
  constructor (value) {
    this.value = value
    this.left = this.right = null
  }
}

module.exports = Tree
