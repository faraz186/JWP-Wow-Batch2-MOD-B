console.log("hello class")        
            
const promise = new Promise((resolve, reject) => {
    const age = 20            
        
    if (age > 18) {         
        resolve("promise solve")
    } else {
        reject("promise reject")
    }
        
}).then((result)=>{
    console.log("then block" , result)
})
.catch((error)=>{
    console.log("catch block" , error)        
        
})

const fetchData = async () => {
    try {

        const data = await fetch('https://fakestoreapi.com/products/')
            .then(res => res.json())
        console.log(data)

        // fetch('https://fakestoreapi.com/productssssssssssss/')
        //     .then(res => res.json())
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err))

    } catch (error) {
        console.log("catch error", error.message)
    }
}

fetchData()

// console.log("hello world")


// var arr = [1,2,3,4]
// var arr2 = [...arr]
// arr2.push("jaffar")
// console.log(arr ,"arr")
// console.log(arr2 ,"arr2")


// classes


// var std1  = {
//     name : "jaffar",
//     age : 22
// }

// function Std(name , age){
//         this.name = name;
//         this.age = age
//         this.getage = ()=>{

//         }
// }

// const std10 = new Std("Bilal" , 25)
// console.log(std10)
// console.log(Std)


// classes
// class Std{
//     constructor(name , age){
//             this.name = name;
//             this.age = age;
//     }
//     getAge(){
//         return this.age
//     }
// }
// const std100 = new Std("Jaffar" , 22)
// console.log(std100.getAge())



// class Std {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;

//     }
// }


// class AddEmail extends Std {
//     constructor(firstName, lastName, email) {
//         super(firstName, lastName)
//         this.email = email
//     }
// }
// const std1 = new Std("JAffar", "Aman")
// const std2 = new Std("Ali", "Muhammad")


// const newstd1 = new AddEmail("Jaffar", "Aman", "amanjaffar50@gmail.com")
// console.log(std1)
// console.log(std2)
// console.log(newstd1 , "newstd1")


const obj1 = {
    name: "Jaffar Aman"
}


const obj2 = {
    name: "bilal"
}

export {
    obj1,
    obj2,


}

// export default obj
