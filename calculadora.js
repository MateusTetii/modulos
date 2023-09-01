var somar = require("./modulos/somar");
var media = require("./modulos/media");
var mutiplicacao = require("./modulos/mutiplicacao");
var divisao = require("./modulos/divisao");
var subtrair = require("./modulos/subtrair");
var mensagem = require("./modulos/mensagem");
var nome = "Mateus";
var msg = "Seja bem vindo";

console.log("a soma de x e y é: "+ somar(45,30));
console.log("a media de x e y é: "+ media(12,18));
console.log("o produto de x e y é: "+ mutiplicacao(47,25));
console.log("o quociente de x e y é: "+ divisao(100,20));
console.log("a subtração de x e y é: "+ subtrair(87,34));
console.log(mensagem(nome, msg));