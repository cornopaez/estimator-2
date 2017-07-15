const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const helmet = require('helmet');
const bodyParser = require('body-parser');
const routes = require('./routes/routes.js');

app.use(helmet());

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/js", express.static(__dirname + "/assets/js"));
app.use("/views", express.static(__dirname + "/assets/views"));

app.use('/', routes);

app.set('view engine', 'html');

app.listen(process.env.PORT || 3000);

console.log("App running on port " + (process.env.PORT ? process.env.PORT : 3000));