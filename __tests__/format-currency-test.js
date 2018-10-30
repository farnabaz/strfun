import { formatCurrency } from '../src'

test('do nothing on formatted strings', () => {
  expect(formatCurrency('12,345')).toBe('12,345')
})

test('format numeric string', () => {
  expect(formatCurrency('123456789')).toBe('123,456,789')
})
