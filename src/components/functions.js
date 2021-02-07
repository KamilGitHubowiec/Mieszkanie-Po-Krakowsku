export const insertBreakBetweenDigits = num => {
  let numStr = num.toString()

  if (numStr.length < 3) {
    return num + ' '
  } else if (numStr.length % 3 === 0) {
    return numStr.replace(/\d{3}/g, '$& ')
  } else if (numStr.length % 3 === 1) {
    return numStr.replace(/^\d{1}/g, '$& ').replace(/\d{3}/g, '$& ')
  } else if (numStr.length % 3 === 2) {
    return numStr.replace(/^\d{2}/g, '$& ').replace(/\d{3}/g, '$& ')
  }
}
