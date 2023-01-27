export const calculateDate = (dateStr: string, isNeedOffset?: boolean) => {
  const date = new Date(dateStr)

  if (isNeedOffset) {
    const offset = date.getTimezoneOffset()
    date.setMinutes(date.getMinutes() + offset)
  }

  return date
}
