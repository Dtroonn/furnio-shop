-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT,
    "password" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "vkId" INTEGER,
    "photoUrl" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
