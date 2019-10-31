/*
* 원시타입(primitive data type)
    - boolean
    - null
    - undefined
    - number
    - string
    - symbol (ES6+)

* 객체타입(object)
    - object
*/

// number (typeof)
3
-5
3.14
2.14e4
2.14e-4
Infinity
NaN // Not a number
0/0 // NaN
10/0    // Infinity

// string
let myName = '탁희'
myName = '김탁희'
// `(backtick) : ES6+ 탬플릿리터링
// string interpolation. 줄바꿈(개행)
myName = `탁
희`
console.log(`안녕하세요. ${myName}입니다.`)

// boolean
true
false

// empty value
undefined   // type -> undefined
null        // type -> object
typeof null
typeof undefined