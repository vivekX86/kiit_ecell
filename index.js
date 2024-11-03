const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000 || process.env.PORT;

app.use(cors({
    origin: "*",
}))

app.use(express.static("public"));
const jsonData = {
    headline: "Shape the Future with KIIT E-Cell",
    subText: "Join us at KIIT E-Cell and contribute to a culture of innovation and enterprenurship, there's a role for everyone.",
    ctaText: "Start Your Tech Journey!",
    ctaLink: "example.com"
}

app.get("/api/hero", (req, res)=>{
    res.json(jsonData);
})

app.listen(port, ()=>{
    console.log("Listening on port:",port);
})
