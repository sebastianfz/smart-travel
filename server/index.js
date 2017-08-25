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
app.use(cors());

app.use(bodyParser.json({
    limit: config.bodyLimit
}));

app.use(express.static(path.join(__dirname, 'dist')));


// api router
app.use('/api', routes());


app.get('/*', (req, res) => {
    res.sendfile(path.resolve(path.join(__dirname, 'dist') + '/index.html'));
});


app.server.listen(process.env.PORT || config.port, () => {
    console.log(`Started on port ${app.server.address().port}`);
});


export default app;

