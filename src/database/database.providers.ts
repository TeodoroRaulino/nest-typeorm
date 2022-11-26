import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'db',
        port: 3306,
        username: 'user',
        password: 'password',
        database: 'db',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true, //Não usar em produção
      });

      return dataSource.initialize();
    },
  },
];