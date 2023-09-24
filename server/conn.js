const Pool = require('pg').Pool
const pool = new Pool({
    user: 'kkrajus007',
    host: 'githubjobs-postgre.cwgb1l9uxoxe.us-east-2.rds.amazonaws.com',
    database: 'test',
    password: 'Kkraju**7',
    port: '5432',
})

module.exports = pool;