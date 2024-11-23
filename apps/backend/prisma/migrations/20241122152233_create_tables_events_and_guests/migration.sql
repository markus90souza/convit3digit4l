-- CreateTable
CREATE TABLE "events" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "image" TEXT NOT NULL,
    "image_banner" TEXT NOT NULL,
    "location" TEXT NOT NULL,
    "expected_audience" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Guest" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "is_confirm" BOOLEAN NOT NULL,
    "is_companion" BOOLEAN NOT NULL,
    "number_of_companions" INTEGER NOT NULL,
    "event_id" TEXT,
    CONSTRAINT "Guest_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
