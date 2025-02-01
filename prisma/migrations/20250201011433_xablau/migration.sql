-- CreateTable
CREATE TABLE "Developers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "stack" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Developers_email_key" ON "Developers"("email");
