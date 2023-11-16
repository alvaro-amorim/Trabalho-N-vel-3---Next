export class Livro {
  codigo: number;
  codEditora: number;
  nomeEditora: string;
  titulo: string;
  resumo: string;
  autores: string[];

  constructor(
    codigo: number,
    codEditora: number,
    nomeEditora: string,
    titulo: string,
    resumo: string,
    autores: string[] = []
  ) {
    this.codigo = codigo;
    this.codEditora = codEditora;
    this.nomeEditora = nomeEditora;
    this.titulo = titulo;
    this.resumo = resumo;
    this.autores = autores;
  }
}
