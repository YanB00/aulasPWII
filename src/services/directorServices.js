import database from '../repository/mysql.js';

async function  createDirector(name_director,nacionality,birthday,sex) {
    const sql = "INSERT INTO tbl_diretor(nome_diretor,nacionalidade, dt_nascimento,sexo) VALUES (?,?,?,?)";

    const infoDirector = [name_director,nacionality,birthday,sex];
    
    const conn = await database.connectDB();
    await conn.query(sql, infoDirector);
    conn.end();
}

async function  updateDirector(name_director,nacionality,birthday,sex, id_director) {
    const sql = "UPDATE tbl_diretor SET nome_diretor=?,nacionalidade=?,dt_nascimento=?,sexo=?, WHERE id_diretor = ?";

    const infoDirector = [id_director,name_director,nacionality,birthday,sex];
    
    const conn = await database.connectDB();
    await conn.query(sql, infoDirector);
    conn.end();
}

export default {createDirector, updateDirector};