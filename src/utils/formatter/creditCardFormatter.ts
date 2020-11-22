export const creditCardFormatter = (text: string): string => {
  const value = text.replace(/[^0-9]/gi, '');
  const matches = value.match(/\d{1,16}/g)
  const foundedValue = matches?.length ? matches[0] : '';

  let parts = [];
  for (let index = 0; index < foundedValue?.length; index += 4) {
    parts.push(foundedValue.substring(index, index + 4));
  }

  return parts.join(' ');
}