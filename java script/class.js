
class Book
{
    constructor(bn,c)
    {
        this.bookname=bn;
        this.cost=c
    }
    showdetails()
    {
        console.log("name of book is ",this.bookname,this.cost)
    }
}

let Book1 = new Book("java",200)
Book1.showdetails()
let book =[]
book.push(new Book("c lang",300))
book.push(new Book("c++ lang",400))
book.push(new Book("javascript",500))


let total =0
for(b of book)
{   console.log(b.bookname)
    total = total + b.cost
}

console.log(total)
for(x in book)
{
    console.log(x,"=",book[x])
}

book[1].showdetails()