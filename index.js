function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui
    if (typeof num !== 'number' || !Number.isInteger(num)) {
        throw new Error('El parámetro debe ser un número entero.');
      }
    
      const resultado = {
        nombre: 'Gustavo Muñiz',
        nacionalidad: 'Mexicana',
        edad: 27,
      };
    
      if (num % 2 === 0) {
        resultado.valorConvertido = num.toString(2);
        resultado.tipoConversion = 'binario';
      } else {
        resultado.valorConvertido = num.toString(16);
        resultado.tipoConversion = 'hexadecimal';
      }
    
      return resultado;
}