const dotenv = require('dotenv');
const config = dotenv.config().parsed;

const http = require('http');
const app = require('./app');
const server = http.createServer(app);

server.listen(config.PORT || 3002, () => {
    console.log(`Server is running at http://localhost:${config.PORT}`);
});