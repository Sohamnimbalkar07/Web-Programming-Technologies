function f1()
{
    console.log("f1 runs")
}

function f2()
{
    return "function 2"
}

let x=f1
let y=f1()
let a=f2
let b=f2()
let z=function f2()
{
    return "function 2"
}
console.log("type of x is",typeof(x))
console.log("type of y is" ,typeof(y))
console.log("type of a is",typeof(a))
console.log("type of b is" ,typeof(b))
console.log("type of z is",typeof(z))
x()
console.log(x)