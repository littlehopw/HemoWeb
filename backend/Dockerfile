FROM node:18

WORKDIR /app


COPY wait-for-it.sh .
RUN chmod +x wait-for-it.sh

COPY package*.json ./
RUN npm install



COPY prisma ./prisma
RUN npx prisma generate


COPY . .





