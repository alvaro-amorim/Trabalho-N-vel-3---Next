import React from "react";
import ControleEditora from "../classes/controle/ControleEditora";

interface Livro {
  codigo: number;
  codEditora: number;
  nomeEditora: string;
  titulo: string;
  resumo: string;
  autores: string[];
}

interface LinhaLivroProps {
  livro: Livro;
  excluir: (codigo: number) => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const controleEditora = new ControleEditora();

  const { livro, excluir } = props;

  return (
    <tr>
      <td>
        <div>{livro.titulo}</div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => excluir(livro.codigo)}
        >
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{livro.nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};
