# HemoWeb

Projeto realizado para a disciplina de Laboratório de Engenharia de Software, com o objetivo de desenvolver uma plataforma de coordenação pessoal de doação de sangue. O sistema oferece funcionalidades como:

- Agendamento de doações
- Notificações e mensagens de lembrete para o usuário

---

## Stack utilizada

**Front-end:**
- React
- Vite
- Tailwind CSS
- Firebase Authentication

**Back-end:**
- Node.js
- Express
- Prisma ORM
- JWT
- bcrypt 
- cors 
- Swagger

**Banco de dados:**
- PostgreSQL

**Outros:**
- Docker

---

## Acesse o sistema em produção

A aplicação pode ser acessada em:[https://hemoweb.com.br](https://hemoweb.com.br)

---

## Rodando localmente

Clone o projeto:

```bash
  git clone https://github.com/littlehopw/HemoWeb.git
```

É um projeto monolito, então é necessário rodar o Frontend e o Backend.

### Frontend

Entre no diretório "Front-end" do projeto:

```bash
  cd frontend
```

Instale as dependências:

```bash
  npm install
```

Inicie o servidor:

```bash
  npm run dev
```

### Backend

Entre no diretório "Back-end" do projeto:

```bash
  cd backend
```

Instale as dependências:

```bash
  npm install
```

Inicie o servidor:

```bash
  npm run dev
```

### Banco de Dados

Instalar PostgreSQL e o pgAdmin.

Criar servidor com as configurações como o modelo: 

![](<https://github.com/littlehopw/HemoWeb/blob/2dfdbaeb78cb86dd560c77022585fef10dc9230d/readme.png>)

Criar database com o nome de hemoweb

Copiar o arquivo 

```bash
  .env.example
```
e colar sem o .example configurando de acordo com a sua máquina:

```bash
    DB_USER=postgres
    DB_HOST=localhost
    DB_NAME=hemoweb
    DB_PASSWORD=senha escolhida no postgres
    DB_PORT=porta escolhida no postgres
    PORT=5000
```

Rode as migrations do Prisma (dentro da pasta backend):

```bash
  npx prisma migrate dev
```
---

## Documentação

[Documentação - Confluence](https://hemoweb.atlassian.net/wiki/spaces/HemoWeb/overview?homepageId=98454)

[Documentação da API via Swagger](http://localhost:5000/api-docs)

---

## Demonstração



---

## Autores

- [@littlehopw](https://www.github.com/littlehopw)
- [@dxyrell](https://www.github.com/dxyrell)
- [@NicolasEL01](https://www.github.com/NicolasEL01)
- [@ML-BM](https://www.github.com/ML-BM)

