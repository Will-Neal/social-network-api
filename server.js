require('dotenv').config()

const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const PORT = process.env.PORT || 3001;
const app = express();

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json());
app.use(routes)

app.listen(PORT, () => console.log(`Server live at http://localhost:${PORT}`))