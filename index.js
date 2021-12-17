
const student1 = "Muhlise"
const student2 = "Utku"
const student3 = "kemal"

const studentArray = ["Muhlise", "Utku", "Kemal", "Cengiz", " Erhan", "Ertan" ]
console.log(studentArray);

console.log(studentArray[2])
console.log(studentArray[4])

console.log(studentArray[studentArray.length -1])  // studentArray.length -1]) sonuncu elemani gosterir

console.log(studentArray.length)

studentArray[2] = "Beyza"
console.log(studentArray)

//BASIC ARRAY METHODS/ OPERATION

// ADDING ELEMENT
// PUSH() add elemnts at the and of teh array

//studentArray.push("Ahmet")
const newLength = studentArray.push("Ahmet") //  push returns thelength of new array
console.log(newLength)
console.log(studentArray)

/*
//  unshift( ) adds element as a first value of array) listennbasina deger ekler
studentArray.unshift("hasan")
studentArray.unshift(3)
studentArray.unshift([`a`])
studentArray.unshift(true)
console.log(studentArray)

*/

// REMOVE ELEMENT  // ELEMENT SILME

// pop( ) ---> romeves lats element
studentArray.pop()
console.log(studentArray)
studentArray.pop()
console.log(studentArray)
const popped = studentArray.pop()
console.log(popped)
/*
const newArr = studentArray.unshift("hasan")
console.log("1: ", newArr)
studentArray.unshift(3)
studentArray.unshift([`a`])
studentArray.unshift(true)
console.log(studentArray)
*/

// shift() ----> removes first element from array

studentArray.shift()
console.log(studentArray)
studentArray.shift()
console.log(studentArray)
const shifted = studentArray.shift()
console.log(shifted)
console.log(studentArray)



//INDEXOF ------ HANGI INDEXTE OLDUGUNU BULMAK ICIN
console.log(studentArray.indexOf("Muhlise"))
// if element does not inclide element it returns "-1"
studentArray.push(23)
console.log(studentArray)
console.log(studentArray.indexOf("23"))



// INCLUDES  icinde var mi true/false degerini verir.


console.log(studentArray.includes("Cengiz"))
console.log(studentArray.includes("Utku"))


//-----SPLICE ----- aRRAYIN ORTASINA YA EKLER YADA CIKARIR
/** 
 * splice(start, deleteCount)
 * splice(start, deleteCount, item1)
 **/

//const spliced = studentArray.splice(2, 2)
//console.log(spliced)

console.log(studentArray)
const spliced2 = studentArray.splice(0, 2, "Ebuzer", "Cengiz", "Erhan" )
console.log(spliced2)
console.log(studentArray)
const spliced3 = studentArray.splice(2, 0, "Hasan", "Muhlise")
console.log(spliced3)
console.log(studentArray)



//-----SLICE----------- INDEXI KESMEYE YARAR
// slice() (start, end) // end does not include

const sliced = studentArray.slice(1, 3)
studentArray.slice(1, 3)
console.log(studentArray)
