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
