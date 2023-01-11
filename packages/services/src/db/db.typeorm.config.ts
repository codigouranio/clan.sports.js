import { DataSource, DataSourceOptions } from 'typeorm';

export const dbConfig: DataSourceOptions = {
  type: 'better-sqlite3',
  name: 'connection',
  database: `${__dirname}/db.sqlite`,
  dropSchema: true,
  synchronize: true,
  migrations: [`${__dirname}/migrations/*.ts`],
  entities: [`${__dirname}/../**/*.entity.js`],
  migrationsTableName: 'migrations_typeorm',
  migrationsRun: true,
};

const cliOptions = {
  cli: {
    entitiesDir: `${__dirname}/entities`,
    migrationsDir: `${__dirname}/migrations`,
  },
};

export const testDbConfig: DataSourceOptions = {
  ...dbConfig,
  ...cliOptions,
  entities: [`${__dirname}/../**/*.entity.ts`],
};

export default new DataSource(dbConfig);

export const dbConfigFactory = async (options: DataSourceOptions) => {
  const dataSource = await new DataSource(options).initialize();
  return dataSource;
};
