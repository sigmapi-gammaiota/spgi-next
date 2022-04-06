-- CreateEnum
CREATE TYPE "Role" AS ENUM ('EC', 'BROTHER', 'NM');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "isAdmin" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "roles" "Role"[];
