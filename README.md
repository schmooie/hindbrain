#Getting started...

Configure your `config/local.js` like so:

    adapters: {
      default: 'postgres',
      postgres: {
        module: 'sails-postgresql',
        host: 'localhost',
        port: 5432,
        user: 'samlau',
        password: '',
        database: 'hivemind_dev',
        schema: true
      }
    }