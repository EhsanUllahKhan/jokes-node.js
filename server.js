const express = require("express");
const app = express();
const joke = require("awesome-dev-jokes");
const { response } = require("express");

app.get("/", function (req, res) {
    // console.log(joke.getRandomJoke());
    res.send("The Joke is \n" + joke.getRandomJoke());
})

app.listen(3000, function () {
    console.log("server listening at port 3000");
})