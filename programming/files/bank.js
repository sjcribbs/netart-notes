let action = process.argv[2]
let amount = Number(process.argv[3])
let balance = 1000


if (action == 'give') {
  balance += amount
  console.log("thx \:\)")
  console.log(`you have, ${balance} dollars now`)
}

//fix Nan
else if (balance != Number) {
  console.log('oh, no \:\(')
}

else if (action == 'take') {
  balance -= amount
  console.log("thx \:\)")
  console.log(`you have ${balance} dollars now`)
}
else {
  console.log(`sry \:\( ${action} is not a function`)
}
