// 동등 연산자(==)
// 강제 형변환을 하면서 비교

1 == '1'    // true

// 일치 연산자(===)
1 === '1'   // false

// 할당( +, +=, -, -=, /=)

// 비교 > < >= <=

// 논리 and(&&) or(||)

// not !

// 삼항연산자 표현식? true:false
let name = 'kim'
name == 'kim'? 'good' : 'bad'
// "good"
name = 'john'
name == 'kim'? 'good' : 'bad'
// "bad"