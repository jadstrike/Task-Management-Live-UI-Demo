/*
  Warnings:

  - The required column `key` was added to the `Member` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Member" (
    "key" TEXT NOT NULL,
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "email" TEXT NOT NULL
);
INSERT INTO "new_Member" ("email", "id", "name", "role") SELECT "email", "id", "name", "role" FROM "Member";
DROP TABLE "Member";
ALTER TABLE "new_Member" RENAME TO "Member";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
