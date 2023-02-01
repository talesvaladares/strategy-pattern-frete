const { Frete, JadlogFrete, Pac, Sedex } = require('./frete.js');

const sedex = new Sedex();
const jadLog = new JadlogFrete();
const frete = new Frete(sedex);

frete.setTransportadora(jadLog)

try {
  console.log(frete.calcular(10));
}
catch(error) {
  console.log(error)
}