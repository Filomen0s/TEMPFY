require("dotenv").config();

const db = require("./db")

const port = process.env.PORT;

const cors = require('cors');
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.json({
        message: "Funcionando!"
    })
})

app.get('/select', async (req, res) => {
    const clientes = await db.selectCustumers();
    res.json(clientes);
});

app.get('/select/:usuarios', async (req, res) => {
    const clientes = await db.selectCustumer(req.params.usuarios);
    res.json(clientes);
});

app.post('/insert', async (req, res) => {
    await db.insertCustomer(req.body);
    res.sendStatus(201);
});

app.patch('/update/:id', async (req, res) => {
    await db.updanteCustomer(req.params.id, req.body);
    res.sendStatus(200);
});

app.delete('/delete/:id', async (req, res) => {
    await db.updanteCustomer(req.params.id);
    res.sendStatus(204);
});

app.listen(port);

console.log("Backend rodando");