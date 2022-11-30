import { MigrationInterface, QueryRunner } from 'typeorm';

export class first1664600145225 implements MigrationInterface {
  name = 'first1664600145225';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "groupname" varchar NOT NULL, "test" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_group"("id", "groupname") SELECT "id", "groupname" FROM "group"`,
    );
    await queryRunner.query(`DROP TABLE "group"`);
    await queryRunner.query(`ALTER TABLE "temporary_group" RENAME TO "group"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "group" RENAME TO "temporary_group"`);
    await queryRunner.query(
      `CREATE TABLE "group" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "groupname" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "group"("id", "groupname") SELECT "id", "groupname" FROM "temporary_group"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_group"`);
  }
}
