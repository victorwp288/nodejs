const express = require("express");
const app = express();

app.get("/", (req, res) =>{
    return res.send("hej med dig der du dig");
});


app.listen(8080, (error) => {
    if (error) {
        console.log("Error starting the server");
    }
    console.log("Server is running on port", 8080);
});

