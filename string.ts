let name: string = "kasur ini rusak";
//name = "samiD";
let fullname: string = "Aries Dimas Yudhistira"

console.log(name[0])
console.log(name[1])

console.log(name.length)
console.log(fullname[fullname.length - 1])

// console.log(fullname[0])
// console.log(fullname[1])
// console.log(fullname[2])

for (let i = 0; i < fullname.length; i++) {
    console.log(fullname[i])
}

name[0] = "B"
console.log(name)
// name = "Bimas"

let newName = ""

for (let j = name.length - 1; j >= 0; j--) {
    newName = newName + name[j]
}

if (newName === name) {
    console.log("Palindrome")
} else {
    console.log("NOT Palindrome")
}

console.log(1, " KM")

// capitalize 
let statement = "hello world students"
let statement2 = ""

for (let k = 0; k < statement.length; k++) {
    if (k === 0) {
        statement2 += statement[k].toUpperCase()
    } else if (statement[k - 1] === " ") {
        statement2 += statement[k].toUpperCase()
    } else {
        statement2 += statement[k]
    }
}

console.log(statement2)

// let h = "h"
// // h === H
// console.log(h === h.toUpperCase()) // false
// console.log(h === h.toLowerCase()) // true 

let words = "tHe QuiCK brOwN fOx juMp"
let newWords = ""

for (let i = 0; i < words.length; i++) {
    // t === T
    if (words[i] === words[i].toUpperCase()) {
        newWords += words[i].toLowerCase()
    } else {
        // T.        t.toUpperCase()
        newWords += words[i].toUpperCase()
    }
}

console.log(newWords)

let num1 = 42
let num2 = 27

if (num1 > num2) {
    console.log(num1, " is bigger")
} else {
    console.log(num2, ' is bigger')
}

let a = 42
let b = 18
let c = 20

if (a > b && a > c) {
    if (b < c) {
        console.log(b, c, a)
    } else {
        console.log(c, b, a)
    }
} else if (b > a && b > c) {
    if (a > c) {
        console.log(b, a, c)
    } else {
        console.log(b, c, a)
    }
}

let dataType = 123

if (typeof dataType === "string") {
    console.log(1)
} else if (typeof dataType === 'number') {
    console.log(2)
} else {
    console.log(3)
}

console.log(typeof "hello")
console.log(typeof 123)

let statement3 = "an apple a day keep the doctor away"
let result = ""

for (let i = 0; i < statement3.length; i++) {
    if (statement3[i] === "a") {
        result += "*"
    } else {
        result += statement3[i]
    }
}

console.log(result)

