const mysqlx = require('@mysql/xdevapi');
const { mysqlPass } = require('../passwords/password');

const connection = () => {
  return mysqlx.getSession({
    user: 'root',
    password: mysqlPass,
    host: '127.0.0.1',
    port: 33060,
    schema: 'mvc_example',
  })
    .then((session) => {
      return session.getSchema('mvc_example');
    })
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
};

module.exports = connection;
