/*
  Warnings:

  - You are about to drop the `Guest` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Guest";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "guests" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "is_confirm" BOOLEAN NOT NULL,
    "is_companion" BOOLEAN NOT NULL,
    "number_of_companions" INTEGER NOT NULL,
    "event_id" TEXT,
    CONSTRAINT "guests_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
