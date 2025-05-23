import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.route.js";

dotenv.config();

const app = express();

// Middleware para permitir que o servidor entenda JSON no corpo da requisição
app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB conectado com sucesso");
  })
  .catch((err) => {
    console.log("Erro ao conectar ao MongoDB", err);
  });

// Rotas
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.listen(3000, () => {
  console.log("Servidor está rodando em port 3000");
});

// 1.40.26
