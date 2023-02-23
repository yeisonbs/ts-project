(()=> {
  let productPrice = 100;
  productPrice = 12;
  console.log('productPrice', productPrice);

  let customerAge: number = 28;
   //  customerAge = customerAge + '1'; // 281
   customerAge = customerAge + 1; // 281
   console.log('customerAge', customerAge);

   //Serán señalados como errores aquellas variables
   // que queramos usar sin haberles dado un valor inicial:
   let productInStock: number = 100;
   console.log('productInStock', productInStock);
   if (productInStock > 10) {
     console.log('is greater');
   }

   //Conversión de números de tipo string a tipo number
   //Esto funciona si el string tiene solo y exclusivamente números que no empiecen con 0. De lo contrario,
   // el resultado será de tipo NaN (Not a Number):
   let discount = parseInt('100');
   console.log('discount', discount);
   if (discount <= 200) {
     console.log('apply');
   } else {
     console.log('not apply');
   }

   let hex = 0xfff;
   console.log('hex', hex);
   let bin = 0b1010; // 10
   console.log('bin', bin);

   const myNumber: number = 10;
 })();

 /*Binarios: se definen colocando "0b" al inicio del valor
let primerBinario = 0b1010; //CORRECTO
let segundobinario = 0b1210; //INCORRECTO. El 2 es inválido

//Hexadecimales: se definen colocando "0x" al inicio del valor
let primerHexa = 0xfff; //CORRECTO
let segundoHexa = 0xffz; //INCORRECTO. El "z" es inválido
En consola, si están correctamente asignados, se hará una
conversión a decimal de dichos números:

let primerHexa = 0xfff;
console.log(primerHexa); // 4095

let primerBinario = 0b1010;
console.log(primerBinario); // 10

let myNumber: number = 20; // Buena practica.
let otherNumber: Number = 20; // Mala practica.
*/
