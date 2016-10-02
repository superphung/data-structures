import test from 'ava'
import ArrayList from './array'

test('array', t => {
  t.is(typeof ArrayList, 'function')
  const list = new ArrayList()
  const numbers = [1, 2, 3]
  numbers.forEach(nb => list.push(nb))
  t.is(list.length, 3)
  list.pop()
  t.is(list.get(1), 2)
  list.delete(0)
  t.is(list.get(0), 2)
})
