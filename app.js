const express = require("express");
const app = express();
const port = 3000;


const { checkUserAgent } = require("./middleware/userMiddleware");


app.use(checkUserAgent);


// ROOT ROUTE
app.get("/", (req, res) => {
    res.status(200).send("Hi, from Assignment-2: User Agent Analytics Tool. Developed by Shahjalal Hazari.")
})


// USER ROUTES
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);


app.listen(port, () => { 
    console.log(`Server is running on http://localhost:${port}`);
});