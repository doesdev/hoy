let today, tomorrow

export default () => {
  if (today && (Date.now() < tomorrow)) return today

  let d = new Date()
  let year = `${d.getFullYear()}`
  let month = `0${(d.getMonth() + 1)}`.slice(-2)
  let day = `0${d.getDate()}`.slice(-2)

  d.setDate(d.getDate() + 1)
  d.setHours(0, 0, 0, 0)

  tomorrow = d.valueOf()
  let end = tomorrow - 1

  d.setDate(d.getDate() - 1)

  let start = d.valueOf()
  today = {full: `${year}${month}${day}`, year, month, day, start, end}

  return Object.assign({fresh: true}, today)
}
