const express = require('express');
const compression = require('compression');
const app = express();
const port = 8080;

app.use(compression());
app.use(express.static('build'));

app.listen(port);
