import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'better-sqlite3',
  name: 'connection',
  database: './mydb.sql',
  dropSchema: true,
  synchronize: true,
  migrations: ['dist/migrations/*.ts'],
  entities: ['dist/**/*.entity.ts'],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
});
