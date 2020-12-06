const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('build'));

app.listen(port);
