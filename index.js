const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 8001;

// Connect to MongoDB
async function connectToMongoDB(url) {
    return mongoose.connect(url);
}

// URL Schema
const urlSchema = new mongoose.Schema({
    shortId: String,
    redirectURL: String,
    visitHistory: [
        {
            timestamp: {
                type: Number,
            },
        },
    ],
});

// URL Model
const URL = mongoose.model("URL", urlSchema);

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("Hello from server");
});

app.post("/url", (req, res) => {
    console.log(req.body);
    res.send("Received");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});