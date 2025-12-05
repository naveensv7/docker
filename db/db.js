import dotenv from "dotenv";
import mysql from "mysql2/promise";

dotenv.config();
let connection;
const connectDB = async () => {
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
    });
  } catch (error) {
    console.log("Unable to connect to db");
    console.log(error);
  }
  return connection;
};

export default connectDB;
