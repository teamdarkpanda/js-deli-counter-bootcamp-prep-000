function takeANumber(katzDeliLine, name) {
  for(var i = 0; i < katzDeliLine.length; i++) {
   katzDeliLine.push(name)
   var string = `"Welcome, ${name}. You are number ${i} in line."`
    
  }
  return string
}
