import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config();



const connection=mysql.createConnection({host: "isepsantafe_ingreso2024",
user: "isepsantafe_ingreso2024",
password: "Iamneo2112@"})
export default connection.promise()