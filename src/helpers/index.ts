export const parseToKMB = (value: number) => {
  if (value >= 1000 && value < 1000000) {
    return (value / 1000).toFixed(1) + 'K'
  }

  if (value >= 1000000 && value < 1000000000) {
    return (value / 1000000).toFixed(1) + 'M'
  }
  return value
}