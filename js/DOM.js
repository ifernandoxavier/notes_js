//criamos e inseriamos conteudo a um elemento anterior
// let novoElemento = document.createElement("p");
// let texto = document.createTextNode("ALGUM TEXTO");
// novoElemento.appendChild(texto);
// let elementoAlvo = document.querySelector("#titulo-principal");
// let elementoPai = document.querySelector("#container-principal");
// elementoPai.insertBefore(novoElemento, elementoAlvo);
// elementoPai.parentNode();

//criamos e inseriamos conteudo a um elemento depois
// let novoElemento = document.createElement("p");
// let texto = document.createTextNode("ALGUM TEXTO");
// novoElemento.appendChild(texto);
// let p = document.querySelector("#paragrafo-principal")
// let pai = p.parentNode;
// pai.appendChild(novoElemento)

//substituindo um elemento no html
// let novoElemento = document.createElement("p");
// let texto = document.createTextNode("ALGUM TEXTO");
// novoElemento.appendChild(texto);
// let elementoAlvo = document.querySelector('#titulo-principal')
// let elementoPai = elementoAlvo.parentNode;
// elementoPai.replaceChild(novoElemento, elementoAlvo)

//criando texto nos elementos
// let pSemTexto = document.getElementById("sem-texto");
// let texto = document.createTextNode("Inserir este texto");
// pSemTexto.appendChild(texto);

//criando nós de elementos
// let lista = document.createElement('ul');
// for (i = 0; i < 5; i++) {
// 	let item = document.createElement('li');
// 	let texto = document.createTextNode('texto lista ' + i);
// 	item.appendChild(texto);
// 	lista.appendChild(item);
// }
// let container = document.getElementById('container-principal');
// container.appendChild(lista);

//manipulando atributos de elementos
// let a = document.querySelector("footer a");
// console.log(a.getAttribute('href'));
// let link = 'https://www.google.com.br';
// a.setAttribute('href', link);
// console.log(a.getAttribute('href'));

//altura e largura com js
// let elemento = document.querySelector('#titulo-principal');
// console.log('largura: ' + elemento.offsetWidth); //considera bordas
// console.log('altura: ' + elemento.offsetHeight);
// console.log('largura: ' + elemento.clientWidth); //não considera bordas
// console.log('altura: ' + elemento.clientHeight);

//pegando a posição do elemento na tela
// let elemento = document.querySelector('#titulo-principal');
// console.log(elemento.getBoundingClientRect());

//estilizando elementos com js
// let elemento = document.querySelector('#titulo-principal');
// elemento.style.color = 'red'
