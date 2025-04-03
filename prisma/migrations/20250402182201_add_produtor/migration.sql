/*
  Warnings:

  - Added the required column `createdAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Cultura" AS ENUM ('Soja', 'Milho', 'Algodão', 'Café', 'Cana_de_Açucar');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- CreateTable
CREATE TABLE "Produtor" (
    "id" TEXT NOT NULL,
    "cpfOuCnpj" TEXT NOT NULL,
    "nomeProdutor" TEXT NOT NULL,
    "nomeFazenda" TEXT NOT NULL,
    "cidade" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "areaTotal" DOUBLE PRECISION NOT NULL,
    "areaAgricultavel" DOUBLE PRECISION NOT NULL,
    "areaVegetacao" DOUBLE PRECISION NOT NULL,
    "culturas" "Cultura"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Produtor_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Produtor_cpfOuCnpj_key" ON "Produtor"("cpfOuCnpj");
