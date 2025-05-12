const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:helloworld@cluster0.kapy7mg.mongodb.net/wolo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.get('/', (req, res) => {
    res.send('Wolo Backend is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
