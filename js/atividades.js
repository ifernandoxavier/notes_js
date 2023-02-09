// 01 - Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
// com ponto de exclamação "!" no final.
// Exemplo:
// cumprimentar("Leonardo") // retornará "Olá, Leonardo!"

const cumprimentar = function(name){
    console.log('Olá, ' + name )
}
cumprimentar("Leonardo");

// 02 - Escreva uma função que receba a idade de uma pessoa em anos e retorne a mesma idade em dias. 
// OBS: Considere que um ano tem 365 dias. Desconsidere anos bissextos (com 366 dias) e desconsidere
// também dias decorridos desde o último aniversário.
// Exemplo:
// converterIdadeEmAnosParaDias(25) // retornará 9125

const converterIdadeEmAnosParaDias = function(idade){
    let diasAno = 365;
    return idade * diasAno;
}
console.log(converterIdadeEmAnosParaDias(25))

// 03 - Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
// num mês, e o quanto ele recebe por hora. A função deverá calcular o salário líquido mensal do funcionário, que é
// da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora. Desse valor, deve ser subtraído
// 30%, relativo a impostos. O retorno da função deve ser a string "Salário líquido é igual a R$ X", em que X é o salário líquido do funcionário no mês.
// Exemplo: 
// calcularSalarioLiquido(180, 60) //Retornará "Salário igual a R$ 7560".

const calcularSalarioLiquido = function(horasTrabalhadas, valorPorHora){
    let salarioBruto = horasTrabalhadas * valorPorHora;
    let juros = 0.3;
    let impostos = salarioBruto * juros;
    let salarioLiquido = salarioBruto - impostos;
    console.log("Salário igual a R$ " + salarioLiquido);
}
calcularSalarioLiquido(180, 60)

//----

// 04 - Crie uma função que recebe um número (de 1 a 12 e retorne o mês correspondente como uma string. Por
//exemplo, se a entrada for 2, a função deverá retornar "fevereiro", pois este é o 2° mês.  
//Exemplo:  
//receberNomeDoMes(1) // retornará "janeiro"

const receberNomeDoMes = function(number){
    switch (number) {
        case 1:
            console.log("janeiro")
            break;
        case 2:
            console.log("fevereiro")
            break;
        case 3:
            console.log("março")
            break;
        case 4:
            console.log("abril")
            break;
        case 5:
            console.log("maio")
            break;
        case 6:
            console.log("junho")
            break;
        case 7:
            console.log("julho")
            break;
        case 8:
            console.log("agosto")
            break;
        case 9:
            console.log("setembro")
            break;
        case 10:
            console.log("outubro")
            break;
        case 11:
            console.log("novembro")
            break;
        case 12:
            console.log("dezembro")
            break;
        default:
            console.log("VALOR INVÁLIDO")
            break;
    }
}
receberNomeDoMes(13)

// 05 - Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
// números de strings.
// Exemplo:
// maiorOuIgual(0, 0) // retornará true
// maiorOuIgual(0, "0") //retornará false

const maiorOuIgual = function(x, y){
    // let validandoY = typeof(y)
    if (typeof(y) == "number"){
        if(x >= y) {
            console.log(true);
        } else {
            console.log(false);
        }
    } else {
        console.log("O segundo valor é uma string, não conseguimos realizar a comparação")
    }
}

maiorOuIgual(0, 1)
maiorOuIgual(3, 1)
maiorOuIgual(0, "0")

// 06 - Escreva uma função que receba um valor booleano ou numérico. Se o parâmetro fornecido for booleano, o
// retorno da função deverá ser o inverso. Por exemplo, se a entrada for false, retornará true. Se o parâmetro for
// numérico, o retorno será o número inverso. Por exemplo, se for fornecido 1, o retorno será 1. Se o parâmetro de
// entrada não for de nenhum dos tipo acima, retorne "booleano ou número esperados, mas o parâmetro é do tipo ...".

// Exemplo: 

// inverso(true) // retornará false
// inverso("6") // retornará "booleano ou número esperados, mas o parâmetro é do tipo string"

const inverso = function (valor){
    if(typeof(valor) == "boolean"){
        console.log(!valor)
    } else if (typeof(valor) == "number") {
        console.log(valor * Math.sign(valor))
    } else {
        console.log("Booleano ou número esperados, mas o parâmetro é do tipo string")
    }
}

inverso("3")

// 07 - Crie uma função que receba quatro números como parâmetro (numero, minimo, maximo, inclusivo) e retorne se o
// parâmetro numero (o primeiro) está entre minimo e maximo. Quando o parâmetro inclusivo for true, tenha "entre"
// como inlusivo, ou seja, considerando se numero é igual a minimo ou a maximo. Caso o parâmetro inclusivo não
// seja informado, seu valor padrão deverá ser false, portanto, a lógica será exclusiva, não considerando se numero
// é igual a minimo ou a maximo.

// Exemplo: 

// estaEntre(10, 10, 50) // retornará true
// estaEntre(16, 100, 160) // retornará false

const estaEntre = function(numero, minimo, maximo){
    if (numero >= minimo && numero <= maximo){
        console.log(true);
    } else {
        console.log(false)
    }
}

estaEntre(2,3,10)

// 08 - Desenvolva uma função que recebe dois números inteiros não negativos (maiores ou iguais a zero) e realize a
// multiplicação deles. Porém, não utilize o operador de mutiplicação.

// Exemplo:

// multiplicar(5, 5) // retornará 25
// multiplicar(0, 7) // retornará 0

const multiplicar = function(x, y){
    if (x >= 0 && y >= 0){
        debugger;
        let soma = 0;
        let cont = 0;
        while(cont < x){
            soma = soma + y
            cont++
        }
        console.log(soma)
    }
}

multiplicar(0,7)