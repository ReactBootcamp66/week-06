export const expiryDateFormatter = (text: string): string => {
  const value = text.replace(/[^0-9]/gi, '');
  const matches = value.match(/\d{1,4}/g)
  const foundedValue = matches?.length ? matches[0] : '';

  let parts = [];
  for (let index = 0; index < foundedValue?.length; index += 2) {
    parts.push(foundedValue.substring(index, index + 2));
  }

  return parts.map((part, index) => {
    if (index === 0) {
      const firstIndex = Number(part.charAt(index)) >= 1 ? `1` : part[index];
      const secondIndex = part.length !== 2
        ? ''
        : Number(part.charAt(index)) >= 1 &&
          ['0', '1', '2'].includes(part.charAt(index + 1))
          ? part.charAt(index + 1) : `2`;

      return `${firstIndex}${secondIndex}`;
    }
    return part;
  }).join('/');
}