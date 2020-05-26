module.exports = {
    "development": {
        host: 'localhost',
        port: '3306',
        username: 'root',
        password: 'K?!?345bv',
        database: 'project_3',
        "dialect": "mysql"
    },
    "production": {
        "use_env_variable": process.env.JAWSDB_URL,
        "dialect": "mysql"
    }
};
