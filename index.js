
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
console.log(sliced)
studentArray.slice(1, 3)
console.log(studentArray)

// FIZZBUZZ  3 VE UCUN KATLARI FIZZ 5 VE BE;'N KATLARI BUZZ IKISININ ORTAK KATLARI FIZZBUZZ

// boş array oluştur
//fızzBuzz funtıon yaz
//funtıon her çeğrıldığında 1 den başlayarak sırayla ekle
// 3 ve 3ün katları fızzö 5 ve5 in katları Buzz 15 ve katları FızzBuzz olarak yazdır


/*
const fbArray =[] 
let count =1;

 function fizzBuzz(){
     if (count % 3 ==0 && count %5 !=0) {
         fbArray.push("Fizz");
     }else if (count % 5 == 0 && count % 3 != 0){
         fbArray.push(`Buzz`)
      } else if (count % 3 == 0 && count %5 == 0){
                 fbArray.push(`FizzBuzz`)
             }else { fbArray.push(count)
         }
         count++
         return fbArray
     
 fbArray.push(count) 
 count++
 return fbArray
        }   
 
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 console.log(fizzBuzz())
 */

/*
for (i = 1; i <= 100; i++)
console.log(i)

for (i = 1; i<= 100; i++){

    if (i%3 ==0){
        console.log("Fizz")
    }
    console.log(i)

} if (i % 5 == 0){
    console.log("Buzz")
} else{
    console.log(i)
}

for(i =1; i<=100; i++){
    if ((i % 3 == 0) && (i % 5 == 0))
    console.log("FizzBuzz")

} if (i % 3 == 0) {
    console.log("Fizz")
} else if (i %5 ==0){
    console.log("Buzz")
}else{ 
    console.log(i)
*/

// yeni alistirma 

function newarr(n, arr =[]){
    if(n === 1){
        arr.push(1);
        return arr.reverse();
    }else{
        if(n%4 === 0 && n% 5 ===0){
            arr.push("FizzBuzz");
        } else if (n% 4 ===0){
            arr.push("Fizz");
            }else if (n% 5 ===0){
                arr.push("Buzz");
            }else{
                arr.push("" +n);
            }
            return newarr(n-1, arr);
    }
}
console.log(newarr(20));


////-----OBJECTS -----------------

const employeeArr = [
`Jhon`,
`Snow`,
38,
`trainer`

]
//key -value pairs
/*
const empObj ={
    firstName: `Jhon`,
    LastName: `Snow`,
    age: 38,
    job: `trainer`
}
console.log(empObj)


 //--1.DOT NOTATION ----2. BRACKET NOTATION


 //----1. dot notation(.)
    console.log(empObj.firstName)


    //--- bracket notation(f)
console.log(empObj[`firstName`])

nameKey ="Name"
console.log(empObj [`first` + nameKey])
console.log(empObj [`last` + nameKey])

const val = prompt("What do you want to know about Jhon")
//console.log(empObj.val)
//console.log(empObj[val])

//empObj[val] ? console.log(empObj[val]) : console.log("Wrong Request")

empObj.location = "Germany"
console.log(empObj)

empObj["mail"] = "abc@mail.com"
console.log(empObj)

empObj[`language`] = ["Spanish", "Deutsch", "Spanish"]
console.log(empObj)

empObj[`school`] = [ "monesotaprep", "minesotaSecondary", "Harwerd"]
console.log(empObj)
*/
/*
const empObj2 = {
    firstName: `Jhon`,
    LastName: `Snow`,
    birthYear: 1990,
    job: "trainer",

   // calcAge : function(birthYear){
   //     return 2021 - birthYear
   // }
   calcAge : function(){
       console.log("this: ", this)
       return 2021- this.birthYear
   }
}

console.log(empObj2.calcAge())

*/
//--------------LOOP------------------------------//
/*
console.log("push up 1")
console.log("push up 2")
console.log("push up 3")
console.log("push up 4")
console.log("push up 5")
console.log("push up 6")
console.log("push up 7")
console.log("push up 8")
console.log("push up 9")
console.log("push up 10")
console.log("push up 11")

*/
//for(let rep = 1; rep <= 30; rep++){
 //   console.log(`push up ${rep}`)
//}
//
/*
const fbArray = []

for(let i = 1; i <=100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        fbArray.push("FizzBuzz")
    } else if (i % 5 == 0) {
        fbArray.push(`Buzz`)
    }else if ( i %3 == 0){
        fbArray.push(`Fizz`)
    }else{
        fbArray.push(i)
}

}
console.log(fbArray)
*/

const array = ["data1", 'data2', "data3", "data4", "data5"]

//console.log(array[0])
//console.log(array[1])
//console.log(array[2])
//console.log(array[3])

for (let i =0; i< array.length; i++){
    console.log(array[i])
}



// continue -break-----

//let evenNumbers = []
//for(let i =0; i<=100; i++){
//if(i % 2 != 0) continue
//if(i== 51) break
//evenNumbers.push(i)

//}
//console.log(evenNumbers)
//console.log(fizzBuzz())
/*

for(let i = 1; i <= 3; i++){
    console.log( `__________ Exercise ${i}`)
    for(let j =1; j<= 5; j++){
        console.log(`repeat ${j}`)
        for(let m = 1; m<= 3; m++){
            console.log(`break ${m} sec`)
        }
    }
}

const reverseArray =[]
for (let i = 10; i >= 0; i--){
    reverseArray.push(i)
}
console.log(reverseArray)
*/


//--------- WHILE----------

//let rep =1
//while(rep<=10){
 //   console.log(`push up ${rep}`)
 //   rep++
//}

let dice = Math.trunc(Math.random() * 6)+1
console.log(dice)
while(dice !==6){
    console.log(`You rolled ${dice}`)
}