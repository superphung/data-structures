import test from 'ava'
import Stack from './stack-string'

test('stack', t => {
  const stack = new Stack()

  stack.push('3')
  t.is(stack.size(), 1)
  stack.push('2')
  t.is(stack.size(), 2)
  t.is(stack.pop(), '2')
  t.is(stack.size(), 1)
  t.is(stack.pop(), '3')
  t.is(stack.size(), 0)
})
