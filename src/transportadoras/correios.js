class Correios  {
  
  calcularFrete(tipoFrete, peso) {

    if (tipoFrete === 'sedex') {
      return 100;
    }

    if (tipoFrete === 'pac') {
      return 80;
    }

  }

}

module.exports = {Correios}
