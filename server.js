const http = require('http');
const app = require('./app');

// set port to 3000 (default if not set in environment)
const port = process.env.PORT || 3000;
app.set('port', port);

// create server
const server = http.createServer(app);

// listen on port 3000
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});