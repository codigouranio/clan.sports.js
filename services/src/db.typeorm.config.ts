import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'better-sqlite3',
  name: 'connection',
  database: './mydb.sql',
  dropSchema: true,
  synchronize: true,
  migrations: ['db/*.ts'],
  entities: ['src/*.entity.ts'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
  cli: {
    entitiesDir: 'src',
    migrationsDir: 'db',
  },
});
