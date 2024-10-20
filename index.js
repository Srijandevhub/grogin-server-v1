const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const databaseConfig = require('./config/databaseConfig');
const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
const port = process.env.PORT || 8000;
const uri = process.env.URI;
databaseConfig(uri);
app.listen(port, () => {
    console.log(`Server Connected At ${port}`);
});