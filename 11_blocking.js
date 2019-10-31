function a() {
    console.log('a')
}
console.log('hi')   // 1. 
setTimeout(a, 3000) // 3. 
console.log('bye')  // 2.


function printHello() {
    console.log('Hellooo')
}

function baz() {
    console.log('baz')
    setTimeout(printHello, 0)
    console.log('baz end')
}

function bar() {
    baz()
}

function foo() {
    bar()
}

foo()