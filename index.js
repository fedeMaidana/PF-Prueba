function laCajaDePandora(numero){
    // proximamente escribiremos codigo aqui
    if (typeof numero !== 'number' || !Number.isInteger(numero)) {
        throw new Error('El parámetro debe ser un número entero.');
      }
    
      if (numero % 2 === 0) {
        // Es un número par, convertir a binario
        return num.toString(2);
      } else {
        // Es un número impar, convertir a hexadecimal
        return num.toString(16);
      }
}