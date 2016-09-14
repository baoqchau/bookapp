// Update with your config settings.

module.exports = {

    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: 'hocgioi1',
        database: 'test2',
        charset: 'utf8'
    },

        pool: {
            min: 1,
            max: 7
        }

};
