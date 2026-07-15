const express = require('express');

const app = express();

const PORT = 8001;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from server");
});

app.post("/url", (req, res) => {
    console.log(req.body);
    res.send("Received");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});