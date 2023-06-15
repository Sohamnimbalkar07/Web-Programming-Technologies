let arr=[12.5,"hh",45]
arr.push(40,70,56,78,45)
console.log(arr)
arr.slice(2,0,"alpha","beta")
console.log(arr)
let index=arr.indexOf(10)
if(index<0)
{
console.log("not found")
}
else
{
    console.log("second occurance on index,index")
}
console.log(arr)

arr.splice(2,0,"so","fh")
console.log(arr)
