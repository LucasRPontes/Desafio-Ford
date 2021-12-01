function criptografar(param) {
  // Essa primeira parte do código eu transformo o texto passado como parametro em String, caso venha algo em Number, e depois crio um array contendo cada caractere do texto individualmente dentro do array.
  let caracteres =  String(param).split('');
  // Este array é onde irei colocar a palavra criptografada
  let palavraCodificada = [];

  //Essa segunda parte, eu faço a iteração do array contendo os caracteres individualmente, e para cada caractere, eu pego seu número de referência de acordo com a tabela ASCII. Tendo esse número, eu verifico se o número é par ou ímpar, caso seja par, eu somo 2, caso for ímpar, eu somo 6, armazeno esse novo número gerado em uma variável, e depois adiciono este número ao array onde será gerado o código criptografado.
  caracteres.forEach((c) => {
    let numeroChar = c.charCodeAt(0);
    let novoChar = '';

    numeroChar % 2 === 0 ? numeroChar += 2 : numeroChar += 6;

    novoChar = String.fromCharCode(numeroChar)

    palavraCodificada.push(novoChar);
  });

  // Nesta última parte, eu pego o array contendo os caracteres correspondentes ao texto criptografado, inverto suas posições dentro do array, e junto todos os caracteres, obtendo uma palavra criptografada.
  return palavraCodificada.reverse().join('');
}


function descriptografar(param) {
  // Esta primeira parte, eu transformo o parâmetro em String e armazeno em um array, igual na função de criptografar, porém eu também reverto a posição dos caracteres no array, que havia sido invertido na função de criptografar
  let caracteres =  String(param).split('').reverse();
  let palavraDescodificada = [];

  // Nesta segunda parte faço a iteração com a lógica semelhante a segunda parte da função de criptografar, porém ao invés de somar, eu subtraio, para que o caractere possa retornar ao caractere anterior
  caracteres.forEach((c) => {
    let numeroChar = c.charCodeAt(0);
    let novoChar = '';

    numeroChar % 2 === 0 ? numeroChar -= 2 : numeroChar -= 6;

    novoChar = String.fromCharCode(numeroChar)

    palavraDescodificada.push(novoChar);
  });

  // Nesta última parte eu concateno todos os caracteres do array que agora contém a palavra descodificada
  return palavraDescodificada.join('');
}


