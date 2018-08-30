export function fixedISO(date) {
  const dateAndTime = date.split('T')
  const fixedDate = dateAndTime[0].split('-')
  return new Date(`${fixedDate[2]}-${fixedDate[1]}-${fixedDate[0]}T${dateAndTime[1]}`)
}

export function sortByDate(data) {
  return data.sort(function(a, b){
    return fixedISO(a.date)-fixedISO(b.date)
  })
}

function cleanRegex(search){
  return RegExp(/^[0-9. :-]*$/gi).test(search) ? search.replace('.', '\\.') : false
}

export function filterResults(data,search) {
  if(search === '') {
    return data
  }
  const escapeString = cleanRegex(search)
  return escapeString && data.filter( element => {
    const amountString = element.amount.toFixed(2).toString()
    return RegExp(escapeString).test(amountString) ||
      RegExp(escapeString).test(element.card_last_four) ||
      RegExp(escapeString.replace('T', ' ')).test(element.date)
  })
}