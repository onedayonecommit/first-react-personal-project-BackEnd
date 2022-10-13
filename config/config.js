const config = {
    dev: {
        username: "dava",
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        dialect: "mysql",
    },
};

module.exports = config;
