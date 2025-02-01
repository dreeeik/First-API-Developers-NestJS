/*
  Warnings:

  - The primary key for the `Developers` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Developers" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "stack" TEXT NOT NULL
);
INSERT INTO "new_Developers" ("email", "id", "name", "password", "stack") SELECT "email", "id", "name", "password", "stack" FROM "Developers";
DROP TABLE "Developers";
ALTER TABLE "new_Developers" RENAME TO "Developers";
CREATE UNIQUE INDEX "Developers_email_key" ON "Developers"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
