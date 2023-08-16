const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.post("/", (req, res) => {
  const sending = "hellooo this is for server";
  res.send(sending);
});
app.patch("/", (req, res) => {
  res.send("this is new ................");
});

app.listen(8000, () => console.log("server started"));       







const firstPromise = new Promise((res, rej) => {
  setTimeout(res, 1000, 'one 1');
});

const secondPromise = new Promise((res, rej) => {
  setTimeout(res, 100, 'two 2');
});




const solve=async()=>{
  try{
    const result1=await firstPromise
    const result2=await secondPromise

    console.log(result1)
    console.log(result2)
  }catch(err){
    console.log("errpr",err)
  }
}
fetch('https://fakestoreapi.com/products')
.then((res) => res.json())
.then(json=> console.log(json))
solve()


const solve2=async()=>{
  try{
    const result1= await fetch('https://fakestoreapi.com/products')
    const result2=await result1.json()

    // console.log(result1)
    console.log(result2)
  }catch(err){
    console.log("errpr",err)
  }
}
solve2()
