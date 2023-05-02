export const formatPrice = (number: number) => {
  const newNumber = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(number);
  return newNumber;
};
