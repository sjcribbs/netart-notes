Net Art && Cultures
BRIZ
W02: Sept 05

**// R U L E S**
	* never use spaces
	* never use upper-cases
	* notes use .md

**// D A T A**

low-level to high-level code
binary code
assembly code
abstract programs: C
C++, objective C
JavaScript
Python
Max MSP
Photoshop

we are looking at binary code because we’re artists, meaning looking at everyday things in unconventional ways and approaching objects/concepts with new, weird perspectives
	- Get a general understanding of what technology is from the base to the interface (low to high levels, pure to abstract)

0 1 2 3 4 5 6 7 8 9
  art historian (creates names based on culture): arabic numerals
  computer programer/mathematician: decimal or base 10

binary code
128s 64s 32s 16s 8s 4s 2s 1s
 0    0   1   0  1  0  1  1    = (in base10) 43
the largest value is 255 (11111111)

binary will stay the same, resolutions change

hexadecimal (hex)
0 1 2 3 4 5 6 7 8 9 A B C D E F

bytes!
11111111 = FF = 255

First inventor/computer engineer
- used celluloid to punch holes in and a needle and mercury to create an electric current

CPU: central processing unit
- data processing (another one is GPU[graphics processing unit])
- typically when we talk about programing, we're talking about the CPU processing our programs (machine learning and cracking passcodes is GPU)
RAM
- volitial storage (doesn't save data, once off the data disappears)
Hard drive
- stores your data
- magnetic bits being flipped upside down/right-side up to represent 0 or 1

Since computers only know binary, ascii was invented to use binary to represent the symbols of that we use like the alphabet  

Interoptobility: we want computers and software and all that fun stuff to work together, so they need to agree on the same stuff

ascii -> unicode

"machine code" = raw data

raw data in files (header)
BM file
  42 4D           - BM, always start w/these two bytes
  66 00 00 00     - the file size ( in bytes )
  00 00 00 00     - special use for apps
  36 00 00 00     - how many bytes into the file does the raw data start
  28 00 00 00     - size of rest of header (in bytes)
  04 00 00 00     - width in pixels
  04 00 00 00     - height in pixels
  01 00 18 00     - color plane && bit depth (24bit)
  00 00 00 00     - compression method
  30 00 00 00     - amount of raw data (48bytes)
  00 00 00 00     -
  00 00 00 00     - misc. info
  00 00 00 00     -
  00 00 00 00     -
  00 FF 00        - BGR
  FF 00 00
  00 00 00
  00 00 FF
  FF FF FF
  00 FF 00
  00 00 FF
  FF FF FF
  FF FF FF
  00 00 FF
  00 FF 00
  FF FF FF
  00 00 FF
  00 00 00
  FF 00 00
  00 FF 00

  *in atom*
  select dash then Command + D, huge cursor
  # this is header text
  ## smaller header text
  ### and a little bit smaller
  #### you get the idea...

  Command + Shift + P, search atom

  coding notes are signified within markdown by using ticks (`these guys`), then you can use three ticks and atom will color code different elements, example:
  ```html
  <a href="http://saic.edu">school</a>
  ```


  code gets written in markdown when collaborating with other coders and for posting online

markup vs markdown
xml = extensible markup language
  - can make your own markup language
  - make your own tags
  - stay consistent

other markup languages
- svg (designer, illustrator)
- mathml (mathematical notation )
