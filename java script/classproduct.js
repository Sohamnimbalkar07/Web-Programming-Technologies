class product
{

    constructor(pn,pc,pd)
    {
    this.productname=pn
    this.productcost=pc
    this.productdesc=pd
    } 
    
showProductDetails()
 {
    console.log(this.productname,this.productcost)
 }

}

let p1 = new product;
let p2 = new product ("pqr",100,"xyz");
p2.showProductDetails()
let p3= { productname:"xxx", productcost:200,productdesc:"abc"}
p3.showProductDetails()

p1.productname= "abc";
p1.productcost= 200;

console.log(p1.productname,p1.productcost)

