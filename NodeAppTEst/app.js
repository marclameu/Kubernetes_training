const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send(`
        <h1>Hello from this Node.js app</h1>
        <p>try sending a request to /error to see the error handling</p>
        <p>try sending a request to /kill to see the process termination</p>
    `);
    });

app.get('/error', (req, res) => {
    process.exit(1);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');

}); 