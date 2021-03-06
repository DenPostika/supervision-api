import mongoose from 'mongoose';
import util from 'util';
import SocketIO from 'socket.io';


// config should be imported before importing any other file
import config from './config/config';
import app from './config/express';

import './server/slack';

const debug = require('debug')('express-mongoose-es6-rest-api:index');
let server = null;

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;

// connect to mongo db
const mongoUri = config.mongo.host;
mongoose.connect(mongoUri, {
  server: {
    auto_reconnect: true,
    socketOptions: {
      keepAlive: 1,
      connectTimeoutMS: 300000,
      socketTimeoutMS: 300000,
    },
  },
});
mongoose.connection.on('error', (error) => {
  throw new Error(`unable to connect to database: ${error}`);
});

// print mongoose logs in dev env
if (config.MONGOOSE_DEBUG) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  server = app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

export const io = new SocketIO(server);
export default app;
