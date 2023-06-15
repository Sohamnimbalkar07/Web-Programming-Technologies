function domaths(choice)
{
    function dosquare(a)
    {
        return a*a
    }
    function dopower(a,b)
    {    
        let d=Math.pow(a,b)
        return d
    }

    if(choice==1)
    {
        return  dosquare
    }
    else
    {
        return dopower
    }

}

let v=domaths(1)
let result=v(2)
console.log(result)
let c=domaths(2)
let result1=c(3,3)
console.log(result1)
console.log(c(3,4))