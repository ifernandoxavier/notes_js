class Conta {
    constructor(saldoCC, saldoCP, jurosPoupanca) {
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.jurosPoupanca = jurosPoupanca;
    }

    deposito(valor) {
        this.saldoCC += valor;
    }

    saque(valor) {
        this.saldoCC -= valor;
    }
    transfereCP(valor) {
        this.saldoCC -= valor;
        this.saldoCP += valor;
    }
    transfereCC(valor) {
        this.saldoCC += valor;
        this.saldoCP -= valor;
    }
    jurosDeAniversario(){
        let juros = (this.saldoCP * this.jurosPoupanca) / 100;
        this.saldoCP += juros;
    }
}

class ContaEspecial extends Conta {
    constructor(saldoCC, saldoCP, jurosPoupanca){
        super(saldoCC, saldoCP, jurosPoupanca*2)
    }
}

let conta = new Conta(1000, 100, 2);
console.log(conta)

conta.deposito(500)
console.log(conta)

conta.saque(400)
console.log(conta)

conta.transfereCP(50)
console.log(conta)
