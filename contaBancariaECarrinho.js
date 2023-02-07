class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    deposito(valor) {
        this.saldo += valor;
    }

    saque(valor) {
        this.saldo -= valor;
    }
}

let conta = new Conta (1000);

conta.deposito(500);
console.log(conta.saldo);

conta.saque(100)
console.log(conta.saldo);

class CarrinhoCompras {
    constructor(itens, qtd, vlrTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.vlrTotal = vlrTotal;
    }

    additem(item){

        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(item);
        }

        this.qtd += item.id;
        this.vlrTotal += item.preco * item.qtd;
    }

    removeItem(item) {
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id){
                debugger;
         
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id});
                let qtdItem = obj.qtd;

                this.qtd -= this.itens[itemCarrinho].qtd;
                this.vlrTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;
                
                this.itens.splice(index, 1);

            }
        }
    }
}

let carrinho = new CarrinhoCompras([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 1,
        preco: 120
    },
    {
        id: 03,
        nome: "Meia",
        qtd: 2,
        preco: 80
    }
], 4, 220);

console.log(carrinho);

carrinho.additem({id:01, nome: "Camisa", qtd:2, preco:20})
console.log(carrinho);

carrinho.additem({id:04, nome: "Camisa longa", qtd:2, preco:20})
console.log(carrinho);

carrinho.removeItem({id:01, nome: "Camisa", qtd:2, preco:20})
console.log(carrinho);
