import moment from 'moment'

export const parseToKMB = (value: number) => {
  if (value >= 1000 && value < 1000000) {
    return (value / 1000).toFixed(1) + 'K'
  }

  if (value >= 1000000 && value < 1000000000) {
    return (value / 1000000).toFixed(1) + 'M'
  }
  return value
}

export const parseTimeAgo = (value: string) => {
  const createdDate = new Date(value)
  const year = createdDate.getFullYear();
  const month = createdDate.getMonth();
  const date = createdDate.getDate()
  const hour = createdDate.getHours()
  const minute = createdDate.getMinutes()
  const seconds = createdDate.getSeconds()
  return moment([year, month, date, hour, minute, seconds ]).fromNow();
}