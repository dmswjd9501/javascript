const me = {
    name: 'eun',
    phone: '010-1234-5678',
    // 메서드에서도 arrow function 사용 금지
    greeting: function() {
        return 'hi, ' + this.name
    }
}

const Person = function(name, phone) {
    this.name = name
    this.phone = phone
    this.greeting = function() {
        return 'hi, ' + this.name
    }
}

const shin = new Person('shin', '010-2772-4942')

// 생성자 함수에서는 arrow function 사용 금지
const Animal = name => {
    this.name = name
}

const dog = new Animal('dog')   // Error

// object 리터링
const name = '은정'
const phone = '010-1234-1234'
const greeting = function() {
    return 'hi ,' + this.name
}
const you = {
    name,
    phone,
    greeting
}