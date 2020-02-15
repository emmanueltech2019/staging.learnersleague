const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

const port = 5000 || process.env.PORT;

app.listen(3000, () => {
	console.log('app running on port 3000');
});
