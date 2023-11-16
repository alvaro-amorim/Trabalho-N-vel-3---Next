import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora";

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { codEditora } = req.query;

    if (req.method === "GET") {
      const nomeEditora = controleEditora.getNomeEditora(Number(codEditora));
      res.status(200).json({ nomeEditora });
    } else {
      res.status(405).json({ message: "Método não permitido" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro interno do servidor" });
  }
};
