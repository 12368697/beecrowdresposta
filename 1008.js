var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var valores = input.split('\n');
var idfuncionario = valores.shift();
qtdhorastrabalhadas = valores.shift();
valorhora = valores.shift();

var salario = qtdhorastralhadas * valorhora;
console.log("Number = " + idfuncionario);
Console.log("salary = " + salario.toFixed(2));
