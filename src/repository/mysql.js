import mysql from "mysql2/promise";

async function connectDB() {
    return mysql.createConnection({
        "password":"",
        "host":"localhost",
        "user": "root",
        "port": 3306,
        "database":'cinetec2024'
    });
}

export default {connectDB};