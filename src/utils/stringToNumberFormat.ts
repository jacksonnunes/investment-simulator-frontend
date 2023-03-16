export const stringToNumberFormat = (value: number) => {
  const stringValue = String(value);
  return Number(stringValue
    .replace(/\./g, '')
    .replace(',', '.')
    .replace(/[^0-9.]/g, ''));
}