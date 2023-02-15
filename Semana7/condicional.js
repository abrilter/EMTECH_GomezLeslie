let edad = 21;

if (edad >= 18) {
    console.log("Válido");
} else {
    console.log("No válido");
}

switch (edad) {
    case '15':
      console.log('Recibes un descuento por el día del niño');
      break;
    case '18':
      console.log('En tu cumpleaños te regalamos un paquete de palomitas.');
      break;
    case '25':
      console.log('2x1 en tu cumpleaños');
      break;
    default:
      console.log('Lo lamentamos,no existe esta función');
  }
  