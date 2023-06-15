const express = require("express")

const app = express();
const port = 3000;

const Data = {
    "Name" : "Tania",
    "Age" : "24"
}

app.get('/', (req, res) => {
    res.send(Data);
});

app.listen(port, () => {
    console.log(`Aplication running on port:${port}`)
})