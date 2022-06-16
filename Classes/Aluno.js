import { listaAlunos } from "../datasAlunos.js";

export default class Aluno {
  constructor(nome, curso, turno, mediaCorte, materias) {
    this.nome = nome;
    this.curso = curso;
    this.turno = turno;
    this.mediaCorte = mediaCorte;
    this.materias = [...materias];
    this.quantidadeAprovacoes = 0;
    this.status = false;

    // methods auto run
    this.calcTotalAverage();
    this.semesterPass();
  }

  calcTotalAverage() {
    let media = 0;
    this.materias.forEach((materia) => {
      materia.avaliacoes.forEach((nota) => {
        media += nota;
        media / 4 >= this.mediaCorte
          ? ((materia["status"] = true), (this.quantidadeAprovacoes += 1))
          : (materia["status"] = false);
      }, 0);
      media = 0;
    });
  }

  semesterPass() {
    this.quantidadeAprovacoes >= 3
      ? (this.status = true)
      : (this.status = false);
  }
}

const alunos = listaAlunos.map(
  ({ nome, curso, turno, mediaCorte, materias }) => {
    return new Aluno(nome, curso, turno, mediaCorte, materias);
  }
);

// console.log(alunos);
