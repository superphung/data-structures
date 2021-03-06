import test from 'ava'
import Stack from './stack-obj'

test('stack', t => {
  const stack = new Stack(2)
  t.is(stack.contains(12), false)
  t.is(stack.count(), 0)
  stack.push(12)
  t.is(stack.contains(12), true)
  t.is(stack.until(12), 1)
  t.is(stack.count(), 1)
  t.is(stack.peek(), 12)
  stack.push(5)
  t.is(stack.count(), 2)
  t.is(stack.peek(), 5)
  t.is(stack.push(8), 'Max capacity already reached. Remove remove element before adding a new one.')
  t.is(stack.count(), 2)
  t.is(stack.pop(), 5)
  t.is(stack.count(), 1)
  t.is(stack.peek(), 12)
  t.is(stack.pop(), 12)
  t.is(stack.count(), 0)
  t.is(stack.peek(), undefined)
  t.is(stack.pop(), undefined)
  t.is(stack.count(), 0)
})
