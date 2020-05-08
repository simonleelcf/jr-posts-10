const express = require("express");
require('dotenv').config();
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const routes = require('./routes');
const app = express();

app.use(helmet());
app.use(morgan('common'));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/v1', routes);

app.listen(PORT, () => {
    console.log(`server listen at port ${PORT}!!!`);
});