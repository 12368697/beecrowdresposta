var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var nome_funcionario = lines[0];
var salario_fixo = parseInt(lines[1]);
var total_vendas = parseFloat(lines[2]);
var bonus = total_vendas * 0.15;

var salario_total = salario_fixo + bonus;

console.log("TOTAL = R$ " + salario_total.toFixed(2));
