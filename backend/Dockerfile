FROM node:18

WORKDIR /app

#copiar caminho
COPY package*.json ./

# Baixar dependências
RUN npm install

COPY . .

# Copiar arquivos prisma e .env
COPY prisma ./prisma
COPY .env .env

# Gerar os arquivos do Prisma e migrar o banco (apenas no primeiro build)
RUN npx prisma generate

RUN npm run dev

EXPOSE 5000

CMD ["npm", "run", "dev"]
