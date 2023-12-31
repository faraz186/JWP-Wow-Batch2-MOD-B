// console.log("HELLO WORLD")


// var age = 40
// if (age === 20) {
//     console.log("true")
// } else {
//     console.log("false")
// }

// if (age >= 20  && age<=50) {
//     console.log("true")
// } else {
//     console.log("false")
// }
// var age = 40
// // var check = age === 20 ? "true" : "false"
// var check = age >= 20 && age <= 50 ? "true" : "false"

// console.log(check)



// var age = 25
// var gender = "female"

// if (age >= 20 && age <= 40) {
//     if (gender === "male") {
//         console.log("allow")
//     } else {
//         console.log("only boys allow")
//     }
// } else {
//     console.log("age not equal 20")
// }


// var check = age >= 20 && age <= 40 ?
//     gender === "male" ? "allow" : "only boys allow"
//     : "age not greater then 20"


// var check = age >= 20 && age <= 40 ?
//     gender === "male" ? "allow" : "gender not match"
//     : "age not equal and greater then 20"

// console.log(check)



// const array = ["apple", "mango"]

// console.log(array[0])
// console.log(array[1])

// const [a,b,c,d,e,f] = [1,2,3,4,5]
// // console.log(arr[0])
// // console.log(arr[1])
// // console.log(arr[2])
// console.log(a,b,c,d , e,f)

// const a = "jaffar"
// console.log(a)

// const {name , age , gender , subjects} = {
//     name: "jaffar",
//     age: 22,
//     gender: "male",
//     subjects:["html" , "css"]
// }
// console.log(name)
// console.log(age)
// console.log(gender)
// console.log("subjects" , subjects)


// map ,filter, forEach ,find,findIndex , for of , for in


// var array = ["apple", "mango"]

// for(var i = 0 ; i<array.length;i++){
//     console.log(array[i])
// }

// for (var  value of array) {
//     // console.log(index, "index")
//     console.log("value", value)
// }
// const obj = {
//     name: "jaffar",
//     age: 22,
//     gender: "male",
//     subjects: ["html", "css"]
// }

// console.log(obj.name)
// console.log(obj["name"])

// for(var keys in obj){
//         console.log(obj[keys])
// }



// var cities = ["karachi", "lahore", "multan", "islamabad", "lahore"]

// const valueCheck = cities.find((value, index, array) => {
//     // console.log(value, index, array)
//     if (value === "lahore") {
//         console.log(index)
//         return true
//     }
// })


// const valueCheck = cities.findIndex((value, index, array) =>
//     value === "delhi"
// )
// if (valueCheck) {
//     console.log("lahore exist")
// } else {
//     console.log("lahore not exist")
// }
// if (valueCheck !== -1) {
//     console.log("lahore exist")
// } else {
//     console.log("lahore not exist")
// }
// console.log(valueCheck, "valueCheck")





// var arr = [0,1,2,3,4,5,6,7,8,9]
// const newArr = arr.map((value, index, array) => {
//     // console.log("map para" , value , index , array)
//     return value * 2


// })
// console.log(arr)
// console.log("newArr", newArr)


// var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// var newArr = arr.filter((value, index) => {
//                 if(value % 2 === 0){
//                    return value 
//                 }
// })

// var  cities=["karachi", "lahore", "multan", "islamabad", "lahore", "lahore"]
// var newArr = cities.filter((value, index) => {
//     if (value === "lahore") {
//         return false
//     }
// })
// console.log("cities", cities)
// console.log(newArr)


// var cities = ["karachi", "lahore", "multan", "islamabad", "lahore", "lahore"]

// var newArr = cities.map((value, index) => {
//     if (value === "lahore") {
//         return true
//     }
// })


// var newArr = cities.filter((value, index) => {
//     if (value === "lahore") {
//         return true
//     }
// })
// console.log(newArr)



var arr = [1, 2, 3, 45, 6, 78]
var newArr = arr.filter((value)=>{
            return value * 2
})

console.log(newArr)