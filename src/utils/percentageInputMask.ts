export const percentageInputMask = (value: string) => {
  value = value.replace(/[^0-9.]/g, '').replace(/^0+/, '');
  
  if (value.length === 1) {
    value = `00${value}`;
  } else if (value.length === 2) {
    value = `0${value}`;
  }
  
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d*)(\d{2})$/, '$1,$2%');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

  return value;
}