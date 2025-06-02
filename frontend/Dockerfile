FROM node:18

WORKDIR /app

# Copiando caminho
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiando o projeto
COPY . .

# Rodando
RUN npm run dev

EXPOSE 5173
