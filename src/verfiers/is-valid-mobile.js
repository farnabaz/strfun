export default function isValidMobile(number) {
  return /^(\+?98[-\s]?|0)9[0-39]\d[-\s]?\d{3}[-\s]?\d{4}$/.test(number)
}
