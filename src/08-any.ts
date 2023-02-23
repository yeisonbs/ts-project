(()=>{
  let myDynamicVar: any;
  myDynamicVar = 100;//number
  myDynamicVar = null;
  myDynamicVar = {};//object
  myDynamicVar = '';//string

  myDynamicVar = 'Hola';
  const rta = (myDynamicVar as string).toLowerCase();
  console.log(rta);

  myDynamicVar = 1212;
  const rta2 = (<number>myDynamicVar).toFixed();
  console.log(rta2);
})();

/*Importancia del Any
La utilidad de any radica cuando se quiere migrar de a pocos
 a TypeScript desde JavaScript, ya que incrementalmente
 definiríamos el tipo de dato
 donde sea necesario sin romper nuestro programa de golpe.

 **/
