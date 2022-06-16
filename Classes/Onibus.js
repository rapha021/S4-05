import { onibus as dataOnibus } from "../dataOnibus.js";

export default class Onibus {
  constructor(capacidade, origem, destinoFinal, paradas, passageiros) {
    this.capacidade = capacidade;
    this.origem = origem;
    this.destinoFinal = destinoFinal;
    this.paradas = paradas;
    this.passageiros = passageiros;
  }

  efetuarParada(paradaAtual) {
    return this.passageiros.filter((passageiro) => {
      return passageiro.bilhete.destino.includes(paradaAtual)
        ? (true, (passageiro["viagemConcluida"] = true))
        : (false, (passageiro["viagemConcluida"] = false));
    });
  }
}

const onibus = dataOnibus.map((onibus) => {
  const { capacidade, origem, destinoFinal, paradas, passageiros } = onibus;
  return new Onibus(capacidade, origem, destinoFinal, paradas, passageiros);
});

// onibus[0].efetuarParada("Rio de Janeiro");
// console.log(onibus[0].passageiros);
