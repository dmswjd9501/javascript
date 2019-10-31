let userName = prompt('넌 누구냐?')


if (userName == 'ssafy') {
    message = '<h1>Hello SSAFY</h1>'
} else if (userName == '1q2w3e4r'){
    message = '<h1>Admin page입니다. </h1>'
} else {
    message = `<h1>${userName} 환영합니다.</h1>`
}
document.write(message)


switch(userName) {
    case '1q2w3e4r': {
        message = '<h2> 관리자님 안녕하세요.</h2>'
        break
    }
    case 'ssafy' : {
        message = '<a href="https://edu.ssafy.com">싸피</a>'
        break
    }
    default: {
        message = `<h1>${userName} 환영합니다.</h1>`
        break
    }
}
document.write(message)


for (let i=0; i<3; i++){
    console.log(i)
}
console.log(i)  // let은 스코프 안에서 삭제된다.! 그래서 반복문에서는 반드시 let을 써주자

for (var j=0; j<3; j++){
    console.log(j)
}
console.log(j)  // var은 함수 스코프를 가지고 있어서 가장 마지막의 j값 3이 출력된다.

/* 
반복문
var는 함수스코프를 가지고 있어서 for 문 이후에 i 변수에 값을 유지
let은 블록스코프를 가지고 있어서 for 문 이후에 해당 변수는 없음
*/


let myArray = ['은정', '상용', '지민']
for (let name of myArray) {
    document.write(name)
}
