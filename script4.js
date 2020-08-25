function myfunction() {
    // debugger;
    return this;
}
myfunction()

let person = {
    firstName: 'John',
    lastname: 'Doe',
    id: 5566,
    fullName : function() {
        // debugger
        return this.firstName + " " + this.lastname
    },
}
console.log(`person fullname is ${person.fullName()}`)

let person1 = {
    fullName: function() {
        // debugger;  
        return this.firstName + ' ' + this.lastname;
    }
}
var person2 = {
    firstName:"John",
    lastname:"Doe",
}

person1.fullName.bind(person2)()
person1.fullName()

const App = {
    start() {
        console.log('running')
    },
    end() {
        console.log('stop')
    }
}
App.start()

class Circle {
    constructor(radius) {
        this.radius = radius
    }
    getArea() {
        return Math.PI * 2 * this.radius
    }
}

let circle = new Circle(10)
let totalArea = circle.getArea()
console.log(`this totalArea is ${totalArea}`)

const functionName1 = () => {
    console.log('no parameter')
}
functionName1()

const functionName2 = (argument1) => {
    console.log('argument 1 : ' + argument1)
}
functionName2('theFirst')

const functionName3 = argument1 => {
    console.log(argument1)
    return argument1
}

let sentence = functionName3("i'm wanna be programmer")
console.log(`this sentences is ${sentence}`)

const functionName4 = argument1 => `hi i'am argument1 with value ${argument1}`
let newSentence = functionName4('Batam')
console.log(`function name 4 is ${newSentence}`)


//Destructing
const object = {
    name: 'Budi',
    gender: 'Male',
    live: 'Batam',
}
console.log(object);

const { name, live } = object;

console.log(name, live)

//
const object1 = {
    name1: 'Budi',
    gender: 'Male',
    live: 'Batam',
}
const { name1, ...newObject } = object1;
console.log(name1)
console.log(newObject)

// spread

const person3 = {
    name: 'Omni knight',
    class: 'support',
    level: 21,
};

const person4 = {
    ...person3,
    name: 'tide hunter',
}

console.log('person 3 is ', person3)
console.log('person 4 is ', person4)