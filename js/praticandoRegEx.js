let validarDominio = /[?www.]\w+.com|.com.br/;
console.log(validarDominio.test("www.google.com"));
console.log(validarDominio.test("www.google.com.br"));
console.log(validarDominio.test("google.com.br"));
console.log(validarDominio.test("www.google.org.br"));

let validarEmail = /\w+@\w+.\.\w+/;
console.log(validarEmail.test("fernando@gmail.com.br"))

let validarNascimento = /^[0-9]{2}[/][0-9]{2}[/][0-9]{4}/;
console.log(validarNascimento.test('23/05/2002'));
console.log(validarNascimento.test('23/05/20'));

let aceiteMaiusculas = /[A-Z]/
console.log(aceiteMaiusculas.test("fernAndo"))

let aceitaFinalID = /\w+ID\b/;
console.log(aceitaFinalID.test("324234"))
console.log(aceitaFinalID.test("234234234ID"))

let validaMarcas = /Marca: (Nike|Adidas|Pumas|Asics)/
console.log(validaMarcas.test("Marca: Jordan"))
console.log(validaMarcas.test("Marca: Nike"))

let validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/
console.log(validaIP.test("192.168.1.1"))

let validaTelefone = /\d{4,5}-\d{4}/;
console.log(telefone.test("4004-5555"))
console.log(telefone.test("404-5555"))
console.log(telefone.test("40304-5555"))

let validaNomeUsuarios = /^(?=.{3,16}$)[a-z0-9-_]/
console.log(validaNomeUsuarios.test("fernando"))
console.log(validaNomeUsuarios.test("fernandofernandofrnado"))
console.log(validaNomeUsuarios.test("fer"))
console.log(validaNomeUsuarios.test("fer"))
console.log(validaNomeUsuarios.test("fer234"))

