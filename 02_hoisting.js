console.log(eunjeong)   // undefined
var eunjeong = '김은정'

/*
var eunjeong    // hoisting 
console.log(eunjeong)
eunjeong = '김은정'
*/

console.log(sangyong)   // Reference Error - 초기화하기전 접근 X
let sangyong = '신상용'

/*
var
1. 선언과 동시에 초기화
2. 할당

let, const는 TDZ(Temporal Dead Zone)이 존재

1. 선언
2. TDZ
3. 초기화
4. 할당
*/
