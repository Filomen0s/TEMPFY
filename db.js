const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'tempfy',
    password: '1994',
    port: '5432',
});

pool.connect()
    .then(() => console.log('Conexão com o banco bem sucedida! ✅'))
    .catch(err => console.error('Falha na conexão com o banco de dados! ❌'))



const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());



app.post('/insert', async (req, res) => {
    const client = await pool.connect();
    const sql = await client.query('INSERT INTO Clientes(usuarios, email, senha) VALUES ($1, $2, $3)', [req.body.usuarios, req.body.email, req.body.senha]);

    res.json(sql.rows)
});

app.get('/select/:usuarios', async (req, res) => {
    const client = await pool.connect();
    const sql = await client.query('SELECT * FROM Clientes WHERE usuarios=$1', [req.params.usuarios])

    res.json(sql.rows)
});

app.patch('/update/:id', async (req, res) => {

    const client = await pool.connect();
    const sql = await client.query('UPDATE Clientes SET usurarios=$1 email=$2 senha=$3 WHERE id=$4', [req.params.usurarios, req.params.email, req.params.senha, req.params.id])

    res.json(sql.rows)
});

app.delete('/delete/:usuarios', async (req, res) => {

    const client = await pool.connect();
    const sql = await client.query('DELETE FROM Clientes WHERE usuarios=$1', [req.params.usuarios])

    res.sendStatus(sql.rows);
});

app.listen(3000, () => console.log('🚀 Servidor rodando na porta 3000'));