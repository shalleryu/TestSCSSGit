const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, '../dist/page.html'));
});

app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(port, () => {
    console.log('Example app listening on port 3000!')
});