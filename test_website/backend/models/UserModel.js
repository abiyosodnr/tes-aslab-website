import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users', {
    judul : DataTypes.STRING,
    sub_judul : DataTypes.STRING,
    kategori : DataTypes.STRING,
    tanggal_post : DataTypes.STRING,
    deadline_tp : DataTypes.STRING,
    deskripsi_tp : DataTypes.STRING
}, {
    freezeTableName:true
})

export default User;

(async()=>{
    await db.sync();
})();