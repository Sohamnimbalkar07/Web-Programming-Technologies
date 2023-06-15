let obj={
    fname:"aaa",
    age:"20",
    dob:{
        day:1,
        month:1,
        year:2023
    }
}


let obj2=obj
obj2.age=23
console.log("obj age",obj.age)
console.log("obj2 age",obj2.age)

let obj3={...obj,dob:{...obj.dob}}
obj3.age=25
obj3.dob.year=2022
console.log("obj age",obj.age)
console.log("obj3 age",obj3.age)

console.log("obj year",obj.dob.year)
console.log("obj3 year",obj3.dob.year)