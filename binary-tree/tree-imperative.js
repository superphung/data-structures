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
    let node = this.root
    while (true) {
      if (node.value > value) {
        if (node.left) {
          node = node.left
        } else {
          node.left = new Node(value)
          return
        }
      } else {
        if (node.right) {
          node = node.right
        } else {
          node.right = new Node(value)
          return
        }
      }
    }
  }
}

class Node {
  constructor (value) {
    this.value = value
    this.left = this.right = null
  }
}

module.exports = Tree
