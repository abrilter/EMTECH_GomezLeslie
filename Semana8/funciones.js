let zapatos = [
    {marca: 'NIKE',stock: 8, precios: 150.30},
    {marca: 'PUMA',stock: 7, precios: 80.5},
    {marca: 'ADIDAS',stock: 6, precios: 70.41},
    {marca: 'CONVERSE',stock: 8, precios: 120.8},
]

zapatos.forEach((marcas,nstock) => {
    console.log(marcas.marca,nstock.stock);
})

//Imprimir en consola solo si alguno de los productos cuesta más de 200. 

let nprecios = zapatos.filter(elemento =>elemento.precio> 200)
console.log(nprecios);

//Imprime en consola el precio promedio de los productos
const todosprecios = zapatos.map(elemento => elemento.precio)
forEach (todosprecios, function(numero){
    suma += numero;
});

const promedio = suma/4;
console.log(promedio);

//Imprime en consola alfabéticamente el nombre de los productos.

zapatos.sort((a,b) => {
    if(a==b){
        return -1;
    }
    return 1;
})

//Imprime en consola el producto más costoso, y redondea en un número entero.

let ordenar1 = zapatos.sort((b,a) => b-a);
console.log(ordenar1.round);