import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import initializeDb from './db';
import middleware from './middleware';
import routes from './routes';
import config from './config/config.json';
import path from 'path';

let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

// 3rd party middleware
app.use(cors({
    exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
    limit: config.bodyLimit
}));

app.use(express.static(path.join(__dirname, 'dist')));

// connect to db
initializeDb(db => {

    // internal middleware
    app.use(middleware({ config, db }));

    // api router
    app.use('/api', routes({ config, db }));


    app.get('/', (req, res) => {
        res.sendfile(path.resolve("./" + 'dist/index.html'));
    });

    app.server.listen(process.env.PORT || config.port, () => {
        console.log(`Started on port ${app.server.address().port}`);
    });
});

export default app;
