export const formatDate = (date: string) => {
  const getDate = (dateToFormat: string) => {
    const matchDate = dateToFormat.match(/\d+/g)
    const formattedDate = {
      day: matchDate[2],
      month: romanizeMonth(matchDate[1]),
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

export const getYear = (date: string) => {
  const fullYear = new Date(date).getFullYear()
  return fullYear
}

const romanizeMonth = (original: string): string => {
  const numerals = [
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["M", "MM", "MMM"]
  ]

  const digits = Math.round(parseInt(original, 10))
    .toString()
    .split("")
  let position = digits.length - 1
  return digits.reduce((roman, digit) => {
    if (digit !== "0") {
      roman += numerals[position][parseInt(digit, 10) - 1]
    }

    position -= 1

    return roman
  }, "")
}
