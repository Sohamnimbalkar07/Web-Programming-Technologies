import express from 'express'
let app=express()

app.get('/',(request,response) =>{
    return response.send('Welcome')
})

app.get('/hii',(request,response) =>{
    return response.send('Hello')
})

app.listen(7777,()=>{
    console.log("on port 7777")
})