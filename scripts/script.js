let telefone = /\d{4,5}-\d{4}/;

console.log(telefone.test("4004-5555"))
console.log(telefone.test("404-5555"))
console.log(telefone.test("40304-5555"))