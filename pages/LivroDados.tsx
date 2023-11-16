import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Menu } from "../componentes/Menu";
import styles from "../styles/Home.module.css";
import ControleEditora from "../classes/controle/ControleEditora";
import { useRouter } from "next/router";

const baseURL = "http://localhost:3000/api/livros";

const LivroDados: React.FC = () => {
  const controleEditora = new ControleEditora();
  const [opcoes, setOpcoes] = useState<{ value: number; text: string }[]>([]);
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [codEditora, setCodEditora] = useState("");
  const [autores, setAutores] = useState("");
  const router = useRouter();

  useEffect(() => {
    const obterOpcoes = async () => {
      const editoras = await controleEditora.getEditoras();
      const opcoes = editoras.map((editora) => ({
        value: editora.codEditora,
        text: editora.nomeEditora,
      }));
      setOpcoes(opcoes);
    };

    obterOpcoes();
  }, []);

  const tratarCombo = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCodEditora(e.target.value);
  };

  const incluir = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const livro = {
      codigo: 0,
      titulo,
      resumo,
      codEditora: parseInt(codEditora),
      autores: autores.split("\n"),
    };

    try {
      const response = await fetch(baseURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(livro),
      });

      if (response.ok) {
        const novoLivro = await response.json();
        console.log("Novo livro adicionado:", novoLivro);
        router.push("/LivroLista");
      } else {
        const errorMessage = await response.text();
        console.error("Erro ao incluir livro:", errorMessage);
      }
    } catch (error) {
      console.error("Erro ao incluir livro:", error);
    }
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Dados do Livro</title>
        <meta name="description" content="Dados do Livro" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      <main style={{ width: "80%", margin: "0 auto", textAlign: "start" }}>
        <h1>Dados do Livro</h1>
        <form onSubmit={incluir}>
          <div className="mb-3">
            <label className="form-label">Título</label>
            <input
              type="text"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Resumo</label>
            <textarea
              value={resumo}
              onChange={(e) => setResumo(e.target.value)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Editora</label>
            <select
              value={codEditora}
              onChange={tratarCombo}
              className="form-control"
            >
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label className="form-label">Autores (1 por linha)</label>
            <textarea
              value={autores}
              onChange={(e) => setAutores(e.target.value)}
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Salvar Dados
          </button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
