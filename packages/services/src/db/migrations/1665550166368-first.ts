import { MigrationInterface, QueryRunner } from 'typeorm';

export class first1665550166368 implements MigrationInterface {
  name = 'first1665550166368';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "temporary_user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (1), "email" varchar NOT NULL, "phone" varchar NOT NULL, "streeAddress" varchar NOT NULL, "postalCode" varchar NOT NULL, "addressCountry" varchar NOT NULL, "addressState" varchar NOT NULL, "photo" varchar NOT NULL)`,
    );
    await queryRunner.query(
      `INSERT INTO "temporary_user"("id", "username", "password", "firstName", "lastName", "isActive") SELECT "id", "username", "password", "firstName", "lastName", "isActive" FROM "user"`,
    );
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`ALTER TABLE "temporary_user" RENAME TO "user"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user" RENAME TO "temporary_user"`);
    await queryRunner.query(
      `CREATE TABLE "user" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "username" varchar NOT NULL, "password" varchar NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL, "isActive" boolean NOT NULL DEFAULT (1))`,
    );
    await queryRunner.query(
      `INSERT INTO "user"("id", "username", "password", "firstName", "lastName", "isActive") SELECT "id", "username", "password", "firstName", "lastName", "isActive" FROM "temporary_user"`,
    );
    await queryRunner.query(`DROP TABLE "temporary_user"`);
  }
}
