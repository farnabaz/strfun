export default function toNumeric(value) {
  return String(value).replace(/[^\d]/g, "");
}
