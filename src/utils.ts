export const currency = (number: number) => {
  if (isNaN(number)) {
    number = 0;
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Number(number));
  }
};

export function generateRandomId(): string {
  const randomId = Math.random().toString(36).substring(2, 15);
  return randomId;
}
