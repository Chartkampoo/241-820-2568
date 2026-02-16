const express = require('express');
const app = express();
const port = 8000;

app.use(express.text());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.post('/test', (req, res) => {
    let user = { 
        name: 'Kat',
        age: 20,
        email: 'Chartkampoo@gmail.com',
    };
    res.json(user);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});