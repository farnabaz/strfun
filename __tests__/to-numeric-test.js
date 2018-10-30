import { toNumeric } from '../src'

test('do nothing on numeric strings', () => {
  expect(toNumeric('12345')).toBe('12345')
})

test('remove all characters except numeric chars', () => {
  expect(toNumeric('QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>)(1234567890*&^%$#@!')).toBe('1234567890')
})

test('deal with null value', () => {
  expect(toNumeric(null)).toBe('')
})

test('deal with undefined value', () => {
  expect(toNumeric(undefined)).toBe('')
})
