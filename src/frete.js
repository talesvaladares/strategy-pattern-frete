const { Correios } = require('./transportadoras/correios.js');
const { Jadlog } = require('./transportadoras/jadlog.js');

//deveria ser uma interface
//mas como estou usando javascript sem typescript, não da pra usar interface
class FreteServico {
  calcular(peso) {};
}

class Sedex extends FreteServico {

  calcular(peso) {
    const correios = new Correios()
    const valorTransporte = correios.calcularFrete('sedex', peso);
    return valorTransporte;
  }

}

class Pac extends FreteServico {

  calcular(peso) {
    const correios = new Correios()
    const valorTransporte = correios.calcularFrete('pac', peso);
    return valorTransporte;
  }

}

class JadlogFrete extends FreteServico {

  calcular(peso) {
    const jadlog = new Jadlog()
    const valorTransporte = jadlog.calcularFrete(peso);
    return valorTransporte;
  }
  
}

class Frete {

  #servico;

  constructor(servico) {
    this.#servico = servico;
  }

  calcular(peso) {
    const valorTotal = this.#servico.calcular(peso);
    return valorTotal;
  }

  setTransportadora(servico) {
    this.#servico = servico;
  }
}

module.exports = { Frete, Sedex, Pac, JadlogFrete  }