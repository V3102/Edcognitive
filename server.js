require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");

app.use(express.json());

// Serve static frontend files (project root is parent of this `main.js` folder)
app.use(express.static(path.join(__dirname, "..")));

// Root route to serve index.html when accessing http://localhost:PORT/
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.use("/api/auth/", authRoute);
app.use("/api/form/", contactRoute);
app.use(errorMiddleware);

const PORT = 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log('server is running on PORT 5000');
    });
});

