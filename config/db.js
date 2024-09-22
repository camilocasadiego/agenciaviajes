import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const db = new Sequelize(process.env.DATABASE_URL || 'mysql://agenciaviajes_eagertight:17aa5a95b96285c6a9ca3583b5be973558d7b59b@6w1.h.filess.io:3307/agenciaviajes_eagertight', {
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorAliases: false
});

export default db;