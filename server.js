import express from 'express';
import cors from cors;

const app = express();

app.use(express.urlencoded({ required: true }));
app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
    res.send('Lista de usuarios');
});

const port = 3000;

app.listen(port, () => {
    console.log('Servidor iniciado en el puerto ', port);
});