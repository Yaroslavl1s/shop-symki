const express = require('express');
const app = express();
const port = 3001;
const fs = require('fs');
const path = require('path');
const pathToDataFile = path.join(__dirname, 'data.dat');

app.use(express.json());

app.post('/submit-form', (req, res) => {
    const { username, email, subject, message } = req.body;
    const data = {
        username,
        email,
        subject,
        message
    }


    fs.appendFile(pathToDataFile, JSON.stringify(data) + '\n', { encoding: 'utf-8' }, (err) => {
        if (err) {
            console.log('Ошибка при записи данных в файл:', err);
            res.status(500).send('Ошибка при записи данных в файл');
        } else {
            console.log('Данные успешно записаны в файл');
            res.status(200).send('Данные успешно записаны в файл');
        }
    });    
});

app.listen(port, () => {
    console.log('Сервер успешно создан: http://localhost:3001');
});
