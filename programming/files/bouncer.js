let age = process.argv[2]
let drinkingAge = 21
let senior = 55

if (age >= 100) {
  console.log("OMG!")
}
else if (age >= senior) {
  console.log("welcome, free drink on us")
}
else if(age >= drinkingAge){
  console.log("welcome to the bar")
}
else {
  console.log("no")
}
