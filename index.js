function takeANumber(katzDeliLine, name) {
  if(katzDeliLine.length === 0) {
    katzDeliLine.push(name)
    return string `"Welcome, ${name}. You are number 1 in line."`  
  }
  katzDeliLine.push(name)
  return string = `"Welcome, ${name}. You are number " + katzDeliLine.length + 1 + " in line."`
}
