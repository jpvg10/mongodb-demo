require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const directorRouter = require('./routes/directorRouter');
const movieRouter = require('./routes/movieRouter');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send({
        message: 'Movie API'
    });
});

app.use(directorRouter);
app.use(movieRouter);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Database connected');
}).catch((error) => {
    console.log('Database connection failed');
    console.log(error);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
