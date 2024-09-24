import database from '../repository/mysql.js';

async function  createDirector(name_director,nacionality,birthday,sex) {
    const sql = "INSERT INTO tbl_diretor(nome_diretor,nacionalidade,data_nascimento,sexo) VALUES (?,?,?,?)";

    const infoDirector = [id_director,name_director,nacionality,birthday,sex];
    const connect = await database.connectDB();
    await connect.query(sql, infoDirector);
    connect.end();
}
export default {createDirector};