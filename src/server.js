import express from 'express';
import ejs from 'ejs';

import path from 'path';

import colors from 'colors';
import dotenv from 'dotenv';

import router from './router.js';

try {
  dotenv.config();
} catch(err) {
  console.error('Failed to load .env file.'.red);
}

console.log('Starting the server...'.grey);

const app = express();

app.use(express.static('static'));
app.set('views', path.join(process.cwd(), 'pages'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');
app.use(router(app));

const port = process.env.PORT || 3333;


app.listen(port, function() {
  console.log(`Server is running in port: ${port}`.green);
});