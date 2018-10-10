/*function powers2 (amount){
  let num = 1
  let arr = []
  for (let i = 0; i < amount; i++ ){
    arr.push(num)
    num *= 2
  }
  return arr
}

function recursive2s(num){
  console.log(num)
  num *= 2
  if( num < 256 ){
    recursive2s(num)
  }
}

recursive2s(1)*/

//function replaceAll( string, char, rep ){
  //if(string.indexOf(char) < 0 ){
    //return string
  //} else {
    //string = string.replace( char, rep )
    //return replaceAll(string, char, rep )
    /*if ( newString.indexOf(char)>= 0){
      return replaceAll( newString, char, rep )
    } else {
      return newString
    }*/
  //}
//}

//let newName = replaceAll('sarah', 'a', 'r')
//console.log(newName)


/*function repeat( num, func ){
  for (let i = 1; i < num; i ++ ){
    func(i)
  }
}

function sayHi( num ){
  console.log(`hello for the ${num} time!`)
}

repeat ( 10, sayHi )*/


function startsWithA( string ){
  if( string[0] == "A") {
    return true
  } else {
    return false
  }
}

function hasPrefix( string ){
  if( string.indexOf(`Mr.`) >= 0 || string.indexOf(`Mrs`) >= 0 || string.indexOf(`Miss.`) >= 0 || string.indexOf(`Ms.`) >= 0 || string.indexOf(`Dr.`) >= 0 ) {
    return true
  } else {
    return false
  }
}

arr = ['Sarah', 'Zoe', 'Ben', 'Amy']
function filter(arr, func){
  let pass = []
  for (let i = 0; i < arr.length; i++ ){
    if( func(arr[i]) ){
      pass.push( arr[i] )
    }
  }
  return pass
}

let faculty = ['Nick', 'Jon', 'Dr. Englebart', 'Dr. Poop']
let docs = filter( faculty, hasPrefix)

console.log(docs)
