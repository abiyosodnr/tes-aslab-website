import {Sequelize} from "sequelize";

const db = new Sequelize('tes_caslab','root','',{
    host : 'localhost',
    dialect: 'mysql'
});

export default db;