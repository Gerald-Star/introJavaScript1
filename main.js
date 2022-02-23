console.log("Hello JS")

// variables
var myFirstVar = 23

myFirstVar = myFirstVar + 2

console.log(myFirstVar)

// Data types

//number
var myFirstVar = 23
console.log(myFirstVar)


//strings
var myStrings = "Hello guys"
console.log(myStrings)

//Boolean
var myBoolean = true
console.log(myBoolean)

//arrays
var myFirstArr = [23, 54, 99, 12]
console.log(myFirstArr)

var mySecArr = [23, 54, 99, "John"]
console.log(mySecArr)

var myThirdArr = [23, 54, 99, 12]
myThirdArr.push(76)
console.log(myThirdArr)

var myFourthArr = [23, 54, 99, "John"]
myFourthArr.pop()
console.log(myFourthArr)

//Learn other Array functions

//var myFourthArr = [23, 54, 99]

//objects are used to store data in an organize way
var myCar = {
    brand: "BMW",
    color: "red",
    doors: 4
}
myCar.color = "black"
console.log(myCar);

var myOtherCar = {
    brand: "Tesla",
    color: "white",
    doors: 4
}

var myCars = []
myCars.push(myCar)
myCars.push(myOtherCar)
console.log(myCars)

//conditional operators
// anytime you are doining conditional operators, you have to use 2 equal signs ==
// this identifies that you are not assigning the variables
//but checking if they variables are the same.

if (myFirstVar === "23") {
    console.log(same)
}

if (!myBoolean) {
    console.log('yay')
}

else if (myFirstVar === 24) {
    console.log("true")
}

else if (myFirstVar === 23) {
    console.log("else if!")
}

else {
    console.log("false")
}

//loops
//Do

console.log(mySecArr.length)

for (var i = 0; i < mySecArr.length; i++) {
    console.log(mySecArr[i])
    if (mySecArr[i] === "Lucas") {
        console.log("Lucas is an index " + i)
    }
}

//Don't

var j = 10
while (j > 0) {
    console.log(j)

    break
}


//forEach /map / reduce are all Modern Js















