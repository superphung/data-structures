import test from 'ava'
import TreeRec from './tree-rec'
import TreeImp from './tree-imperative'

test('tree recursive', t => {
  const nums = [3, 7, 4, 6, 5, 1, 10, 2, 9, 8]
  const treeRecursive = new TreeRec()
  const treeImperative = new TreeImp()

  run(treeRecursive)
  run(treeImperative)

  function run (tree) {
    nums.map(num => tree.add(num))
    const objs = tree.toObject()
    t.is(objs.value, 3)
    t.is(objs.left.value, 1)

    t.is(objs.left.left, null)
    t.is(objs.left.right.value, 2)
    t.is(objs.left.right.left, null)
    t.is(objs.left.right.right, null)

    t.is(objs.right.value, 7)

    t.is(objs.right.left.value, 4)
    t.is(objs.right.left.left, null)

    t.is(objs.right.left.right.value, 6)
    t.is(objs.right.left.right.left.value, 5)
    t.is(objs.right.left.right.left.right, null)
    t.is(objs.right.left.right.left.left, null)

    t.is(objs.right.right.value, 10)
    t.is(objs.right.right.right, null)

    t.is(objs.right.right.left.value, 9)
    t.is(objs.right.right.left.right, null)

    t.is(objs.right.right.left.left.value, 8)
    t.is(objs.right.right.left.left.right, null)
    t.is(objs.right.right.left.left.left, null)
  }
})
