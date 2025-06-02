-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "medula_ossea" BOOLEAN NOT NULL,
    "tipo_sanguineo" VARCHAR(3) NOT NULL,
    "data_nascimento" DATE NOT NULL,
    "notificacoes" BOOLEAN NOT NULL DEFAULT true,
    "sexo" VARCHAR(1) NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_modificacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Hemocentros" (
    "id" SERIAL NOT NULL,
    "rua" VARCHAR(255) NOT NULL,
    "bairro" VARCHAR(100) NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,
    "numero" VARCHAR(10) NOT NULL,
    "cep" VARCHAR(10) NOT NULL,
    "estado" VARCHAR(2) NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_modificacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Hemocentros_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agendamento" (
    "id" SERIAL NOT NULL,
    "usuario_fk" INTEGER NOT NULL,
    "data_agendamento" DATE NOT NULL,
    "horario_agendamento" TIME NOT NULL,
    "hemocentro_fk" INTEGER NOT NULL,
    "status_agendamento" VARCHAR(20) NOT NULL DEFAULT 'Pendente',
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_modificacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Doacao" (
    "id" SERIAL NOT NULL,
    "quantidade_sangue" DECIMAL(5,2) NOT NULL,
    "agendamento_fk" INTEGER NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "data_modificacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Doacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Doacao_agendamento_fk_key" ON "Doacao"("agendamento_fk");

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_usuario_fk_fkey" FOREIGN KEY ("usuario_fk") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_hemocentro_fk_fkey" FOREIGN KEY ("hemocentro_fk") REFERENCES "Hemocentros"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Doacao" ADD CONSTRAINT "Doacao_agendamento_fk_fkey" FOREIGN KEY ("agendamento_fk") REFERENCES "Agendamento"("id") ON DELETE CASCADE ON UPDATE CASCADE;
