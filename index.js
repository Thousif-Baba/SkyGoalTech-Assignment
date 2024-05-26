const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const app = express();
require('dotenv').config();
require('./config/db');
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', routes);

app.listen(PORT, () => {
    console.log(`Server is up and running on PORT: ${PORT}`);
})
