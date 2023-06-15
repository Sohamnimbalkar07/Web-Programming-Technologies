let obj = {
    fname : "iet",
    show : function()
    {
        console.log(this.fname)
    }
}

obj.show()

let f1 = obj.show

f1()
f1=f1.bind(obj)
f1()