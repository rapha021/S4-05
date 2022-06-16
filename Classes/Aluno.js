import { listaAlunos } from "../datasAlunos.js";
export class Aluno {
  constructor(nome, curso, turno, mediaCorte, materias) {
    this.nome = nome;
    this.curso = curso;
    this.turno = turno;
    this.mediaCorte = mediaCorte;
    this.materias = [...materias];
  }

  calcTotalAverage() {
    const medias = this.materias.map((materia) => {
      let average = 0;
      materia.avaliacoes.forEach((nota) => (average += nota));
      return average;
    });
    return medias.map((media) => {
      return media / 4;
    });
  }
}

let alunos = [];
listaAlunos.forEach(({ nome, curso, turno, mediaCorte, materias }) => {
  alunos.push(new Aluno(nome, curso, turno, mediaCorte, materias));
});

console.log(alunos[0].calcTotalAverage());
