const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const routes = require("./routes/CarRoute")
const authRoutes = require('./routes/auth'); 


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// // Define routes
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });
app.use('/api/auth', authRoutes);
app.use("/api", routes);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});