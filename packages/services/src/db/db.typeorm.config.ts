import { DataSource, DataSourceOptions } from 'typeorm';
import { getDefaultLibFileName } from 'typescript';

import { root } from '../paths';

export const dbConfig: DataSourceOptions = {
  type: 'sqlite',
  name: 'connection',
  database: `${root}/data/db.sqlite`,
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
