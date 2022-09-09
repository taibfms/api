-- CreateTable
CREATE TABLE "times" (
    "id" TEXT NOT NULL,
    "team" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "times_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jogador" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "Idade" INTEGER NOT NULL,
    "Selecao" TEXT NOT NULL,

    CONSTRAINT "jogador_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "confrontos" (
    "id" TEXT NOT NULL,
    "data" TEXT NOT NULL,
    "adversario" TEXT NOT NULL,

    CONSTRAINT "confrontos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "logs" (
    "id" TEXT NOT NULL,
    "placar" INTEGER NOT NULL,
    "expulsoes" INTEGER NOT NULL,

    CONSTRAINT "logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "times_team_key" ON "times"("team");
