export function formatMMK(value) {
  return `${new Intl.NumberFormat("en-US").format(value)} MMK`;
}
