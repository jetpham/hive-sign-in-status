-- CreateTable
CREATE TABLE "UpdatedData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "areas" TEXT NOT NULL,
    "major" TEXT NOT NULL,
    "project" TEXT NOT NULL,
    "opinion" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "UpdatedData_pkey" PRIMARY KEY ("id")
);
