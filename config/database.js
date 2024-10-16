const { Sequelize } =  require('sequelize');

const sequelize = new Sequelize("postgresql://juan:T1cqq_9iYMxmugK-ciCJwg@scary-avocet-2468.jxf.gcp-southamerica-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full");

const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso.');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    }
};

testConnection();



module.exports = sequelize;
