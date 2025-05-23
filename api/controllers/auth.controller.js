export const signup = (req, res) => {
  console.log(req.body);
  res.json({ message: "Usuário registrado com sucesso" });
};
