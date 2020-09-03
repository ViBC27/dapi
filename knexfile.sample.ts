export default {
  debug: false,
  client: 'mysql',
  connection: {
    user: 'name',
    password: 'name',
    database: 'name'
  },
  seeds: { directory: 'app/database/seeds/' },
  migrations: { directory: 'app/database/migrations/' }
};
