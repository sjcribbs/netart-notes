Net Art && Cultures
<br>
BRIZ, Nick
<br>
Sept 12
<br>
<!-- ♫ Buffalo Daughter ♫ -->
<br>
<!-- ★jC★ notes on
<a href="arth_prehy_newmedia_05april.rtf">
  Computer Programming
</a>
and
<a href="arth_prehy_newmedia_27april.rtf">
  Algorithmic Art
</a> -->

#### Douglas Rushkoff
- <a href="https://www.youtube.com/watch?v=kgicuytCkoY">
  Program of Be Programmed
</a>
- ***"A modern day Marshall McLuhan"***
- Similar to Ellen Ullman, in that they are the one programmer in the room who asks if the creation of whatever is being discussed is good for the world


#### Early Programming
- instructions ☞ HALT ☞ index ☞ END
- Grace HOPPER and the Compiler
- load instructions + index ☞ instructions ☞ END
JavaScript and php used for the internet (mainly JavaScript)
- The expansion from Difference to Analytical
      - analytical:
      1. (adj.) Of or pertaining
      to analysis; resolving into
      elements or constituent parts;
      as, an analytical experiment;
      2. (adj.) Analytic reasoning as
      opposed to synthetic

-  ♥ Ada Lovelace's Notes of the Analytical Engine ♥
- thinking about programming, and more simply giving instructions to a computer, as being equivalent to setting up an elaborate domino toppling systems
    <!-- (reminds me of 3rd grade... the only things I remember from that is spending hours every day making elaborate lines all around the classroom and then knocking them down before returning to lectures... as well as the moon phases exercise with black and white cookies) -->
- Military-industrial beginnings
  - HOLLERITH punch card census calculations ☞ IBM (MIT(academic-entertainment))
- Electricity wasn't fundamental to the earliest computers, so it doesn't have to be fundamental to the future of computers either
    <!-- "could even be biological!" -> neurons and hacking the action potential?? -->
- *"Remediation"*: the digitization of old/zombie media changes the essence of that media because of the properties in which computers store & search for data
- Sydney PADUA's *The Thrilling Adventures of Lovelace & Babbage*, and <a href="https://www.youtube.com/watch?v=2v3YR0-e1YY">
3D animation of the Analytical Engine
</a>
- <a href="https://drive.google.com/file/d/1BUabtPcAD7Xn68n8nVSzQWAVfF0jXukW/view?usp=sharing">
When Computers Were Women
</a>
- Relay ☞ *tons* of relays ☞ vacuum tubes ☞ transistors
    <!-- start of the computer is very American centric, extremely western and product of the military-industrial economy -> thinking about Yojimbo in the way that the gun was represented -> How did the "East" perceive the quick growth of computers within the military-->
    <!-- ☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟☟ -->
    <!-- *"Every new technology necessitates a new war"* -Marshall McLuhan -->
    <!-- *"Every new war necessitates a new technology"* -//jonCates -->
- <a href="https://www.youtube.com/watch?v=LN0ucKNX0hc">
"People with deep pockets, like governments"
</a>
- *"Logic"*: the illusion of thought by computers made through strict, clear rules that when followed lead to an electric current reaching an *endgate*
- "better" transistors = "better" Computers


# Ƹ̵̡Ӝ̵̨̄Ʒ
# &nbsp; &nbsp; &nbsp; &nbsp; ░ ∗ ◕ ں ◕ ∗ ░
## Homework
  **☟QUICK LINKS☟**
  - read this: JavaScript: How Did It Get SO Popular?
  - read/do: Eloquent JavaScript (ch1-3) (interactive code!!)
  - throughout the week do: Codeacademy: Learn JavaScript (#1-4)
  - night before next class do: learn x in y minutes: JavaScript
<br><br> ￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣￣

Net Art && Cultures
<br>
BRIZ, Nick
<br>
Sept 19
<br>
<!-- ♫ Frankie Reyes ♫ -->
<br>
## JavaScript Review
- ECMA = company in charge of updating JavaScript
- No memory management *yay* **garbage collection**
- **Numbers**
- **Operators**
  - **\*** multiplication
  - **/** division
  - **\-** subtraction
  - **\+** addition
  - **%** (gr8 4 time)
  - **=** *the assignment operator*, the inverse of '=='
    - **>**, **<**, **>=**, and **<=** are all boolean operators (*remember that the only possible outputs for booleans are 'true' or 'false'*)
  - **==** the inverse of '===', "is 'said variable' equal to 'the other said variable'?" *(> bugs, > flexibility)*
  - **===** "is 'said variable' EXACTLY equal to 'the other said variable'?" *(< bugs, < flexibility)*
  - **!** "the not operator"
  - **Logic operators**
    - **&&** And
    - **||** Or
    - <a href= "https://www.youtube.com/watch?v=VBDoT8o4q00"> See How Computers Add Numbers In One Lesson </a>
- **Variables**: naming a space in our RAM ('var' not used anymore)
  - **const** (manages memory and RAM a little better, *if the variable is not going to change use this one and for global variables*)
  - **let** ()
- '**;**' = '.' at the end of the sentence, statement = sentence, expressions = parts of sentences (predicate, direct object, subject, etc.)
- when you want your data to be letters, you gotta put in **" "**, or **' '**, or **\` `**
  - The most likely reason for use of single vs double in different libraries is programmer preference and/or API consistency.
  - As well as practical reasons as confusion of double quotes in double quotes
  - can be solved by us
  - **\` `** = cool, fun shit because you can pass variables into a string
    - s = "hello " + name
    - s = \`hello ${name}`

#### *lolll !everything is an object!*

- **data types**
  - undefined!
  - object (operates like a dictionary)
    - `s = {age: 20, name: "sarah", location: "chicago"}`
      - `s.age` `//Output = 20`
      - `s.name` `//Output = 'sarah'`
      - `s.location` `//Output = 'chicago'`
    - numbers
    - strings
    - boolean
    - functions
    - the object 'null' is similar to 'undefined'

## *It is wise to keep it consistent*

- Adding to the Array:
`let prime = [ 2, 3, 5, 7 ];
prime.push( 13 );`
- Removing something from the end of the Array
`prime.pop(1);`
- Removing the first thing from the Array:
`prime.shift(1);`
- Removing a specific thing from the Array: `prime.slice(1,1);`
- OR removing a specific thing from the Array using the index:
`let sarah = name.indexOf("sarah")
name.splice(sarah,1)`
- `let x = 0
x = x + 1 === x += 1 === x++`(adding and reassigning by one number)
`x = x + 5 === x += 5` (adding and reassigning)
`console.log(x)`

*you can put a **loop within a loop**, a **conditional statement within a conditional statement**, a **conditional statement within a loop**, a **loop within a conditional statement***

#### *4 loop*
`for( let milesLeft = 10; milesLeft > 0; milesLeft-- ){`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;`if ( milesLeft == 1){`<br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`console.log('almost there!!')`<br>
    &nbsp;&nbsp;&nbsp;&nbsp;`} else {`<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`console.log('are we there yet?')`<br>
    &nbsp;&nbsp;&nbsp;&nbsp;`}`<br>
  &nbsp;&nbsp;`}`
<br>
`console.log('yay, we've arrived!)`<br>
#### *limited loop*
- `for(let i = 0; i > 3; i++){`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;`console.log(i)`<br>
  `}`
- *pulling items from the Array* <br>
`for(let i = 0; i > 3; i++){`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;`console.log(i)`<br>
  `}`
- *looping for all items in the Array* <br>
`for(let i = 0; i > names.length; i++){`<br>
  &nbsp;&nbsp;&nbsp;&nbsp;`console.log(names[i])`<br>
  `}`
