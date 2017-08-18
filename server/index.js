import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routes from './routes';
import config from './config/config';
import path from 'path';
import mongoose from 'mongoose';
/**
 * Configure database
 */

mongoose.connect(config.db); // Connects to your MongoDB.  Make sure mongod is running!
mongoose.connection.on('error', function () {
    console.log('MongoDB Connection Error. Please make sure that MongoDB is running.');
    process.exit(1);
});

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
// app.use(cors({
//     exposedHeaders: config.corsHeaders
// }));

app.use((req, res, next) => {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use(bodyParser.json({
    limit: config.bodyLimit
}));

app.use(express.static(path.join(__dirname, 'dist')));



// api router
app.use('/api', routes());


app.get('/', (req, res) => {
    res.sendfile(path.resolve("./" + 'dist/index.html'));
});

app.all('/*', (req, res) => {
  res.sendfile(path.resolve("./" + 'dist/index.html'));
});


app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});


export default app;
