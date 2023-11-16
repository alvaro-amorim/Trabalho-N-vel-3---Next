export default class ControleEditora {
  private editoras = [
    {
      codEditora: 1,
      nomeEditora: "Alta Books",
    },
    {
      codEditora: 2,
      nomeEditora: "Bookman",
    },
    {
      codEditora: 3,
      nomeEditora: "Addison Wesley",
    },
    {
      codEditora: 4,
      nomeEditora: "Pearson",
    },
  ];

  getEditoras() {
    return this.editoras;
  }

  getNomeEditora(id: number) {
    const editora = this.editoras.find((e) => e.codEditora === id);

    if (!editora) {
      throw new Error("Editora não encontrada");
    }

    return editora.nomeEditora;
  }
}
