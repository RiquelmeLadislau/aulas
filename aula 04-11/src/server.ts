import express from "express";
import helmet from "helmet"
import path from "path"

const server = express();

server.use(helmet()) //protege o backend
server.use(express.json()) //habilita leitura do json
server.use(express.urlencoded({ extended: true})) //suporte a formulários
server.use(express.static(path.join(__dirname, "../public")))

server.get("/", (req, res) => {
  let nome = "john"
  let idade = 90
  res.json({ nome, idade })
});

server.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});