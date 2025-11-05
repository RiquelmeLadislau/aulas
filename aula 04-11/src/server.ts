import express from "express";
import helmet from "helmet"
import path from "path"
import router from "./routes"

const server = express();

server.use(helmet()) //protege o backend
server.use(express.json()) //habilita leitura do json
server.use(express.urlencoded({ extended: true})) //suporte a formulários
server.use(express.static(path.join(__dirname, "../public")))

//prefixos de rota
server.use("/", router)


server.listen(3000, () => {
  console.log("🚀 server working in: http://localhost:3000");
});