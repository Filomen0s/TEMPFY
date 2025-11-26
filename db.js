async function connect() {

    const { Pool } = require("pg");
    const pool = new Pool({
        port: process.env.DB_PORT,
        password: process.env.PASSWORD,
        host: process.env.HOST,
        user: process.env.USER,
        database: process.env.DATABASE
    });

    const client = await pool.connect();
    console.log("criou o pool de conexão");

    const res = await client.query("select now()");
    console.log(res.rows[0]);
    client.release();

    global.connection = pool;
    return pool.connect();
}

connect();

async function selectCustumers() {
    const client = await connect();
    const res = await client.query("SELECT * FROM Clientes");
    return res.rows;
}

async function selectCustumer(usuarios) {
    const client = await connect();
    const res = await client.query("SELECT * FROM Clientes WHERE usuarios=$1", [usuarios]);
    return res.rows;
}

async function insertCustomer(custumer) {
    const client = await connect();
    const sql = "INSERT INTO Clientes(usuarios, email, senha) VALUES ($1, $2, $3)";
    await client.query(sql, [custumer.usuarios, custumer.email, custumer.senha]) //Não precisa ter retorno
}

async function updanteCustomer(id, custumer) {
    const client = await connect();
    const sql = "UPDATE Clientes SET usurarios=$1 email=$2 senha=$3 WHERE id=$4";
    await client.query(sql, [custumer.usurarios, custumer.email, custumer.senha, id]) //Não precisa ter retorno
}

async function deleteCustomer(usuarios) {
    const client = await connect();
    const sql = "DELETE FROM Clientes WHERE usuarios=$1";
    await client.query(sql, [usuarios]) //Não precisa ter retorno
}

module.exports = {
    selectCustumers,
    selectCustumer,
    insertCustomer,
    updanteCustomer,
    deleteCustomer
}