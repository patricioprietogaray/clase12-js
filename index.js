function esVocal(letra) {
    //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
    //Verificar si el usuario ingresó un string de más de un carácter y, en ese caso, informarle 
    //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
    //Escribe tu código aquí
  
    let retorno;
    switch(letra) {
      case 'a':
        retorno='Es vocal';
        break;
      case 'e':
        retorno='Es vocal';
        break;
      case 'i':
        retorno='Es vocal';
        break;
      case 'o':
        retorno='Es vocal';
        break;
      case 'u':
        retorno='Es vocal';
        break;
      case letra.length >= 2:
        retorno='Dato incorrecto';
        break;
      default:
        retorno='Dato incorrecto';
        break;
    }
    return retorno;
  }

  let sera = esVocal('a');
  console.log(sera);