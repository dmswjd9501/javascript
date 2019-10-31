// 브라우저가 '요청'을 보내서 데이터를 가져오기 위해 axios 사용

console.log('hi')
axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {             // 온 거를 인자로 넘겨줄게 => 이 안에서는 마음대로 갖고놀아도 OK
        console.log(response)
        document.write(
            <h1>${response.data.id} : ${response.data.title}</h1>
            <p>${response.data.body}</p>
        )
        return response.data
    })                              // then의 첫번째 인자 : 넘어온 데이터
// .then : 데이터가 도착하면 이거 실행해! (왜냐면, javascript는 데이터 가져올때까지 기다려 주지 않는다)
// var post = axios.get('http://~~~') 이 처럼, 변수에 저장하는게 아니고, axios를 이용하면 편리함!
console.log('bye')