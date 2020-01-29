//expression syntax in JavaScript

//Booleans
true
false

logic
!false
true&&false
true||false

//Numbers (all one type)
3.14

//Equality
3 === 3.0
3!== 3.14

//Ordering
3 > 2
3 >= 2
2 < 3
2 <= 3

// Strings - you can use doubl eor single but we use double in html
//so well use single to differentiate

//Concatenation
'a' +  'b' ==='ab'

//Arithmetic
3 + 2 === 5
3 - 2 === 1
3 * 2 === 6
3 / 2 === 1.5
3 % 2 === 1
3 ** 2 === 9

// Type coercion
// no string operation uses a minus so it converts to number
//coercion is when the program converts to what it thinks the best  would be

'3' + 2 === '32'
'3' + true === '3true'
'3' - 2 === 1
3 + true == 4

//Loose  Equality - usually avoid using this
'3' == 3
true == 1
false == 0
false == ''
'' == 0

//Template Strings
'3 + 2 is ' + 3 + 2// concatenates 3 then 2 so it is 32
'3 + 2 is ' +(3 + 2)// this will  give you 5

//plug arbitrary expressions into Strings
'3 + 2 is ${3 + 2}'
