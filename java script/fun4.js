function name(message)
{
    let arr=["soham","nimbalkar"]
    for(n of arr)
    {
        console.log(message(),n)
    }
}

function indianwelcome()
{
    return "namaste ... "
}

name(indianwelcome)


let j=function f1() {
    return "how are you"
}
name(j)
console.log(typeof(j))

name(function ()
   {
        return "konnichiva"
    })

