Net Art && Cultures
<br>
BRIZ, Nick
<br>
Sept 26
<br>
<!-- ♫ Noname ♫ -->
<br>

*linking to libraries*
<br>
`<body><script src=""></script> **other stuff** </body>`<br>

## functions
- writing a function <br>
`function powers2(){`
  `let num = 1`
  `console.log(num)`
  `num *= 2`

  `for (let i=0; i<8; i++){`
    `console.log(num)`
    `num *= 2`
  `}`
`}`
- calling a function<br>
`powers2()`
- "polluting the name-space": making the variables within a library universal, makes it very difficult for programmers to work with your library
- **pure** functions vs **other** functions = whether or not the function has a side effect (not a value judgement) <br>
  `let a = 5`<br>
  `function squareA(){`<br>
    `a *= a`<br>
  `}`<br>
  `squareA()`<br>
- pure is taking variables within it's function and giving you an answer, anything else = mutating the other variables (printing to the console counts as mutating)
- **method** VS **property**
  - method: a function that belongs to an object (ex. `.push`)
  - property: built-in variable in an array (ex. `.length`)
- how to **return** multiple values
       function powers2(amount){
        let num = 1
        let arr = []
        for (let i = 0; i < amount; i++ ){
        arr.push(num)
        num \*= 2
      }
      let twos = powers2(8)
      console.log(twos)
- Asking for the last item in the array:
<br> `console.log( twos[twos.length-1] )`
- `function powers2 (amount, a)`
  - `amount` and `a` are arguments
  - so if written within the function is `console.log(a)`
  - the console.log is referring to the local 'a' no the global 'a' and thus is undefined
- **recursion**: a function that calls itself
      function inception(){
        inception()
      }
      inception()
      //infinite loop, will keep running
  - a recursive function that works will have a stop
        function recursive2s(num){
          console.log(num)
          num \*= 2
          if (num < 256 ){
            recursive2s(num)
          }
        }
        recursive2s(1)
- string methods and properties
  - `let name = 'nick'`
  - `name.indexOf('i')` = 1
  - `name = name.replace('i', 'o')` = nock (replaces the first 'i' with an 'o')
  - if the value is not in an array when using `.indexOf` it'll come out with '-1'
    - make sure to return first in function
    - `if( string.indexOf(char) < 0){`
    - `return string}`
          function replaceAll( string, char, rep ){
            if(string.indexOf(char) < 0 ){
              return string
              } else {
                let newString = string.replace( char, rep )
                if ( newString.indexOf(char)>= 0){
                  replaceAll( newString, char, rep )
                  } else {
                    return newString
                  }
                }
              }
  - running just `return` will break you out of your function
  - if you have a recursive function that is supposed to return a value, then every exit has to have a return statement
##### *Every exit in a recursive function must have a return statement*

- **higher order** functions
  - passing in a function as an argument
        function repeat( num, func ){
          for (let i = 1; i < num; i ++ ){
            func(i)
          }
        }

        function sayHi( num ){
          console.log(`hello for the ${num} time!`)
        }

        repeat ( 10, sayHi )
  - higher function using pure functions
    - using `filter` to check a huge list of names and only give back the names that pass the test of the chosen func
  - passing functions as function syntax: `let docs = filter( faculty, function(){ })`

  ### Homework
- to make a brush in p5 (has to be a function, that function has to take in arguments (at least x and y), has to have a side effect -> needs to render something to the p5 canvas)
        // BRUSH HOMEWORK EX

        function brush(){
          let s = 10
          ellipse(x-s/2, y, s)
          ellipse(x-s/2, y, s)
        }

        function setup (){
          createCanvas( innerWidth, innerHeight )
        }

        function draw (){
          brush ( mouseX, mouseY )
        }
