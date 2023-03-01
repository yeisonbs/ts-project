(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  //Podemos definir que los argumentos de la función tengan
  //un determinado tipo de dato (o más de uno si se usa Union Types):
  function createProductJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  //Cuando hagamos uso de nuestra función, TypeScript comprobará que le envíes todos
  // los parámetros en orden y con el tipo de dato que se declaró en la función:
  const producto1 = createProductJson(
    "titulo",
    new Date('10/10/3030'),
    30,
    'M'
  )

  /*Si queremos que un argumento sea opcional de enviar, podemos
  usar el modificador ? junto al nombre del argumento: */

  type Sizes2 = 'S' | 'M' | 'L' | 'XL'; //Alias y Tipos Literales

  function createProductJson2(
    title: string,
    createdAt: Date,
    stock?: number,
    size?: Sizes
  ) {
    /*Código de la función*/
  }

  function randomFunc(title: string, amount?: number) { } //CORRECTO

  /*Nota: cuando definamos argumentos opcionales en una función, estas deben
  ubicarse al final, si no TypeScript nos indicará un **error, ya que podría haber
  confusiones al momento de invocar la función y enviar los respectivos parámetros: */

  //function otherFunc(title?: string, amount: number){} // ERROR

})();
/*se recomienda usar arrow function en lugar de function por presentar problemas */
