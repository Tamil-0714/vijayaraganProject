const mysql = require("mysql2");

function connectDB() {
  const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "TooJoo_1967",
    database: "event_mangement",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
  });
  return pool.promise();
}

async function queryDB(sql, params) {
  try {
    const connection = await connectDB();
    const [rows] = await connection.query(sql, params);
    connection.releaseConnection();
    return rows;
  } catch (error) {
    throw error;
  }
}

async function fetchFacultyCred(id) {
  try {
    const query = "SELECT * FROM facultyCred WHERE id = ?";
    const params = [id];
    const rows = await queryDB(query, params);
    return rows;
  } catch (error) {
    console.error(error);
    // throw error;
  }
}

module.exports = {
  fetchFacultyCred,
};
