function sumanum(a,b,c){
    let resultado = a + b + c;
    console.log(resultado);
}

const sumanum2 = (a,b,c) => console.log(resultado);


function comp(a,b){
    if(a>b)
		{
			console.log("El primero es mas grande que el segundo");
		}else if(a<b){
			console.log("El primero es mas pequeño que el segundo");
		}else{
		    console.log("Son iguales");
		}
}

const array1 = [1,2];
const array = ['Panque', 21,5, array1]
const [nombre,edad] = array1;
console.log(nombre,edad);


const usuario1 = {
    nombre : 'Juanl',
    apellido : 'Perez',
    email: 'ricardo@gmail.com',
    pais: 'mexico',
}

const{pais, acceso,email} =usuario1;
console.log(usuario1.apellido.nombre.email);

const retornarUsuario = ({email,pais}) => {
    console.log(email,pais)
}
retornarUsuario(usuario1);