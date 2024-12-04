const con = require('../connect/banco');

const create = (req, res) => {
    let cliente_id = req.body.cliente_id;
    let professor_id = req.body.professor_id;
    let numero = req.body.numero;

    let query = `INSERT INTO telefone (cliente_id, professor_id, numero) VALUES`
    query += `('${cliente_id}', '${professor_id}', '${numero}')`;
  
    con.query(query, (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

const read = (req, res) => {
    con.query('SELECT * FROM telefone', (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}


const update = (req, res) => {
    let id = Number(req.params.id)
    let cliente_id = req.body.cliente_id;
    let professor_id = req.body.professor_id;
    let numero = req.body.numero;

    let query = `UPDATE  telefone SET cliente_id = '${cliente_id}', professor_id = '${professor_id}', numero = '${numero}' WHERE telefone_id = ${id}`
        con.query(query, [cliente_id, professor_id, numero, id], (err, result) => {
        if (err) {
           return res.status(500).json(err)
        } else {
           return  res.status(201).json(result)
        }
    })
}

const deletar = (req, res) => {
    const id = Number(req.params.id)
    const query = 'DELETE FROM telefone WHERE telefone_id = ?'
    con.query(query, [id], (err, result) => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(201).json(result)
        }
    })
}

module.exports = {
    create,
    read,
    update,
    deletar
}