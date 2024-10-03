import database from '../repository/mysql.js';

async function createUser(name,email,password,typeUser){
    const sql = "INSERT INTO tbl_usuario(nome,email,senha,tipo_usuario VALUES (?,?,?,?)";

    const infoUser = [name, email, password, typeUser];

    const conn = await database.connectDB();
    await conn.query(sql, infoUser);
    conn.end();
}

async function updateUser(name,email,password,typeUser, idUser) {
    const sql = "UPDATE tbl_usuario SET nome = ?, email = ?, password = ?, tipo_usuario= ? WHERE id_usuario = ?";

    const infoUser = [name,email,password,typeUser, idUser]

    const conn = await database.connectDB();
    await conn.query(sql, infoUser);
    conn.end();
}

export default {createUser, updateUser};