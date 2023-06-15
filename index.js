const express = require("express")

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send("Hallo");
});

app.listen(port, () => {
    console.log(`Aplication running on port:${port}`)
})