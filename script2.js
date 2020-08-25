let greeting = 'say hi'
console.log(greeting)
greeting = 'say hello instead'
console.log(greeting)

let greeting1 = 'say hai'
let time = 4
if( time > 3 ) {
    let hello = 'say hello instead'
    console.log(hello)
}
// console.log(hello)

function myFunction(totalprice, name) {
    let totaltax = totalprice * 0.1;
    let detailtax = `name ${name}, tax:${totaltax}`
    return detailtax
}
console.log(myFunction(5,'apple'))

const funct = (totalprice, name) => {
    let totaltax = totalprice * 0.2
    let detailtax = `name : ${name}, tax : ${totaltax}`

    return detailtax
}
console.log(funct(3,'water melon'))

let names = ['Budi', 'Jhoni', 'Tono', 'Jaka'];
let modifiedName = names.map((name) => {
    console.log('Mr. ' + name)
})

function myFunction2(totalprice,name) {
    totaltax = totalprice * 0.1

    detailtax = `name: ${name}, tax: ${name}`
    return detailtax
}
console.log(myFunction2(6,'Nanas'))

function factorial(n, accumulator) {
    if (n === 0) {
        return accumulator
    }else {
        return factorial(n-1, n*accumulator)
    }
}

console.log(factorial(4,1))

