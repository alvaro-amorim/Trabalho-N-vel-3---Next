import { Livro } from "../modelo/Livro";

const livros: Livro[] = [
  {
    codigo: 1,
    codEditora: 1,
    nomeEditora: "Alta Books",
    titulo: "Use a Cabeça: Java",
    resumo:
      "Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java",
    autores: ["Bert Bates", "Kathy Sierra"],
  },
  {
    codigo: 2,
    codEditora: 4,
    nomeEditora: "Pearson",
    titulo: "Java, como Programar",
    resumo:
      "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
    autores: ["Paul Deitel", "Harvey Deitel"],
  },
  {
    codigo: 3,
    codEditora: 3,
    nomeEditora: "Addison Wesley",
    titulo: "Core Java for the Impatient",
    resumo:
      "Readers Familiar with Horstmann's original, two-volume 'Core Java' books who are looking for a comprehensive, but condensed guide to all of the new features and functions of Java SE 9 will learn how these new features impact the language and core libraries.",
    autores: ["Cay Horstman"],
  },
];

class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo =
      livros.reduce(
        (max, livro) => (livro.codigo > max ? livro.codigo : max),
        0
      ) + 1;
    livro.codigo = novoCodigo;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex((livro) => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
