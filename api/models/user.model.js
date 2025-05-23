import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, // Campo obrigatório
      unique: true, // Nome de usuário único
      trim: true, // Remove espaços em branco no início e no final
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true } // Adiciona timestamps de criação e atualização
);

const User = mongoose.model("User", userSchema);

export default User;
