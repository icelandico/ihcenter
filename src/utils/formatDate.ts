export const formatDate = (date: string) => {
  const getDate = (dateToFormat: string) => {
    const matchDate = dateToFormat.match(/\d+/g)
    const formattedDate = {
      day: matchDate[2],
      month: matchDate[1],
      year: matchDate[0]
    }
    return formattedDate
  }

  if (date) {
    const formattedDate = getDate(date)
    return `${formattedDate.day} ${formattedDate.month} ${formattedDate.year}`
  }

  return "??-??-??"
}
