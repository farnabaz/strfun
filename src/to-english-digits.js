import { PERSIAN_ZERO_CHAR_CODE, ARABIC_ZERO_CHAR_CODE } from "./consts";

export default function toEnglishDigits(value) {
  return String(value)
    .replace(/[۰-۹]/g, w => w.charCodeAt(0) - PERSIAN_ZERO_CHAR_CODE)
    .replace(/[٠-٩]/g, w => w.charCodeAt(0) - ARABIC_ZERO_CHAR_CODE);
}
