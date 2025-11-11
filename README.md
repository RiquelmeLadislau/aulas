<p align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
</p>

# 🚀 Como instalar o **Express** com **TypeScript**

Guia rápido para criar um servidor **Express** utilizando **TypeScript** e **TSX** ⚡

---

## 1️⃣ Inicializar o projeto

📦 Crie o projeto e gere o `package.json` automaticamente

> npm init -y

---

## 2️⃣ Instalar o TypeScript
🧠 Instale o TypeScript como dependência de desenvolvimento:

> npm i -D typescript

## 3️⃣ Criar configuração do TypeScript
⚙️ Gere o arquivo de configuração:

>npx tsc --init

⚙️ Config do tsconfig.json
```
  {
  "compilerOptions": {
  "target": "ES2020",
  "module": "CommonJS",
  "strict": true,
  "esModuleInterop": true,
  "forceConsistentCasingInFileNames": true,
  "skipLibCheck": true,
  "outDir": "./dist"
  },
  "include": ["src", "test"]
  }

```
---

## 4️⃣ Instalar TSX
⚡ Instale o TSX para rodar TypeScript diretamente sem compilar manualmente:


>npm i -D tsx
```
📁 Crie a pasta src e o arquivo principal server.ts:

src/
 └── server.ts
```
---

## 5️⃣ Adicionar script no package.json



🛠️ Adicione este script para iniciar o servidor:
```
"scripts": {
  "start": "node --import=tsx --watch ./src/server.ts"
}
```
▶️ Execute com:
>npm start

---

## 6️⃣ Instalar Express 
🌐 Instale o Express:

>npm i express

---

## 7️⃣ Instalar tipos do Express

>npm i -D @types/express
🧱 Criando o servidor
📝 No arquivo src/server.ts:
```
import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Olá mundo! 🌎");
});

server.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});
```
---

## 8️⃣ Instalar nossa proteção de hackers
- Proteger nosso servidor de pessoas maliciosas tentando pegar dados do servidor n\
>npm i helmet

npm i -D supertest

npm i -D @types/supertest
---

## 9️⃣ Reconhecer as tipagens do helmet

>npm i -D @types/helmet
