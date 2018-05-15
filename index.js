function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  var position = katzDeliLine.length
  return `Welcome, ${name}. You are number ${position} in line.`
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return ``
  }
  var name = katzDeliLine.shift()
  console.log(name)
}