var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());
var C = parseFloat(lines.shift());

var MEDIA = parseFloat(((A*2)+(B*3)+(C*5))/10).toFixed(1);

console.log("MEDIA = " + (MEDIA));
