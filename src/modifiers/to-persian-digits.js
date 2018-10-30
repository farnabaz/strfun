import { PERSIAN_DIGITS } from "../consts";

export default function toPersianDigits(value) {
  return String(value).replace(/[0-9]/g, w => PERSIAN_DIGITS[w]);
}
