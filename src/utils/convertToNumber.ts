export const convertToNumber = (str: string) => {
  if (Number.isNaN(Number(str))) return str
  return Number(str)
}
