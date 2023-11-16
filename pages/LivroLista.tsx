import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Menu } from "../componentes/Menu";
import styles from "../styles/Home.module.css";
import { LinhaLivro } from "../componentes/LinhaLivro";
import { Livro } from "../classes/modelo/Livro";

const baseURL = "http://localhost:3000/api/livros";

const LivroLista: React.FC = () => {
  const [livrosAtualizados, setLivrosAtualizados] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const obterLivros = async () => {
      try {
        const response = await fetch(baseURL);
        const data = await response.json();
        setLivrosAtualizados(data);
        setCarregado(true);
      } catch (error) {
        console.error("Erro ao obter livros:", error);
      }
    };

    if (!carregado) {
      obterLivros();
    }
  }, [carregado]);

  const excluirLivro = async (codigo: number) => {
    try {
      const response = await fetch(`${baseURL}/${codigo}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setLivrosAtualizados(
          livrosAtualizados.filter((livro) => livro.codigo !== codigo)
        );
      } else {
        console.error("Erro ao excluir livro");
      }
    } catch (error) {
      console.error("Erro ao excluir livro:", error);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Lista de Livros</title>
        <meta name="description" content="Lista de Livros" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main className="fs-5" style={{ width: "80%", margin: "0 auto" }}>
        <h1 style={{ textAlign: "left", color: "black" }}>Lista de Livros</h1>
        <table
          className="table table-striped table-hover"
          style={{ textAlign: "left" }}
        >
          <thead className="table-dark">
            <tr>
              <th scope="col">Título</th>
              <th scope="col">Resumo</th>
              <th scope="col">Editora</th>
              <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livrosAtualizados.map((livro) => (
              <LinhaLivro
                key={livro.codigo}
                livro={livro}
                excluir={() => excluirLivro(livro.codigo)}
              />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
