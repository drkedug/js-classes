/* EXERCÍCIO DA CALCULADORA

  Seu objetivo aqui é declarar uma função chamada calculadora e exportá-la.

  Em seguida, você tem que programar uma calculadora que vai receber 3 valores na função:
  1 - Primeiro numero, numerador
  2 - Segundo numero, denominador
  3 - Operação. Vai ser um character que refere à operação, "+", "-", "*" ou "/".
  Então calculadora(1,2, "+") tem que retornar 3. E calculadora(4,1, "/") tem que retornar 4

  Será verificado os resultados, e é esperado que tentativa de dividir por 0 retorne a frase: "cannot divide by 0!"

  Se o operador for invalido, retornar "invalid operator"
*/

const calculadora = (valor1, valor2, operador) => {
  let resultado;
  if(operador === "+") {
    resultado = valor1+valor2;
  } else if(operador === "-") {
    resultado = valor1-valor2;
  } else if(operador === "*") {
    resultado = valor1*valor2;
  } else if(operador === "/") {
    if(valor2 === 0) {
      resultado = "cannot divide by 0!";
    } else {
      resultado = valor1/valor2;
    }
    
  } else {
    resultado = "invalid operator"
  }
  
  return resultado;
}

module.exports = { calculadora };