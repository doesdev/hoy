'use strict'

// setup
let today, tomorrow

// exports
module.exports = hoy

// main
function hoy () {
  if (today && (Date.now() < tomorrow.valueOf())) return today
  let d = new Date()
  let year = d.getFullYear()
  let month = `0${(d.getMonth() + 1)}`.slice(-2)
  let day = `0${d.getDate()}`.slice(-2)
  today = {full: `${year}${month}${day}`, year, month, day}
  d.setDate(d.getDate() + 1)
  d.setHours(0, 0, 0, 0)
  tomorrow = d
  return Object.assign({fresh: true}, today)
}
