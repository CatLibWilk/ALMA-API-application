require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.use(routes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.state('client/build'))
};

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
});
