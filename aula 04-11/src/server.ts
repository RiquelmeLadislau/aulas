import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.send("Olá mundo! 🌎");
});

server.listen(3000, () => {
  console.log("🚀 Servidor rodando em http://localhost:3000");
});