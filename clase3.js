// crear un objeto que tenga por nombre usuario
// en este objeto tendrá dos propiedades 
// name e id (separadas por : y terminan en , c/u)

const usuario = {
    name: 'Patricio',
    id:1,
}

// usuario en el stack (la pila de la memoria)
// estará apuntando (puntero) al heap (monton de memoria).
// cuando se copia o se le asigna a otro objeto un objeto
// ya existente los datos son apuntados en el heap al 
// mismo lugar.

const usuario2 = usuario;
// aqui uno apunta a otro y los dos terminan en el heap
// en el mismo lugar

console.log(usuario);
console.log(usuario2);

usuario.name="Pedro";

console.log(usuario.name);
console.log(usuario2.name);

// con spread operator se copia hacia otro
// lugar en el heap
let usuario3 = {...usuario};
usuario3.name="Gaby";

console.log(`nombre de usuario: ${usuario.name}`);
console.log(`nombre de usuario2: ${usuario2.name}`);
console.log(`nombre de usuario3: ${usuario3.name}`);

////////////

// los objetos tienen una parte de propiedades que se pueden modificar
// las propiedades son caracteristicas de dicho objeto como su color
// tamaño, nombre, etc.
// por otro lado los objetos tienen métodos y son las acciones que 
// los mismos pueden realizar: si fuera un telefono movil un método
// podría ser enviar un mensaje, sonar la alarma, etc.

const user1 = {
    // propiedades
    nombre: "Sherlock Holmes",
    edad: 60,
    genero: "Masculino",
    intereses: ['violin', 'boxeo'],

    // metodo es una propiedad que hace algo
    // nombreDelMetodo: funcion {hace algo}
    saludo: function() {
        // alert muestra una ventana emergente 
        // en el navegador
        alert('Hola soy ' + this.nombre + '.');
    }
}   

const user2 = {
    // propiedades
    nombre: "Sherlock Holmes",
    edad: 60,
    genero: "Masculino",
    intereses: ['violin', 'boxeo'],

    // metodo es una propiedad que hace algo
    // nombreDelMetodo: funcion {hace algo}
    saludo: function() {
        // alert muestra una ventana emergente 
        // en el navegador (conexion con el DOM)
        alert('Hola soy ' + this.nombre + '.');
    }
}   

console.log(user1.edad);
user1.edad=35;
console.log(user1.edad);
// objeto['propiedad'] y muestro o accedo
// a la misma
// formato string
console.log(user1['nombre']);
// por notacion de punto (ambas tienen el 
// mismo resultado)
console.log(user1.nombre);

// estructura de nuestos usuarios
// donde user es un registro y 
// usersList es una tabla 
// (como si lo fueran)
// const usersList = [user1, user2];

// console.log(usersList);




// llamo al metodo del objeto
// miPrimerObjeto.saludo();


/////////

const user = {
    name: 'Pedro',
    age: 20,
    email: 'pedro@gmail.com',
    login: function() {
        console.log('El usuario se ha logueado');
    },
    logout: function() {
        console.log('El usuario se ha deslogueado');
    },
}

user.login();
user.logout();

///

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.3;
console.log(`Para redondear ${area} = ${Math.round(area)}`);
console.log(`Para redondear para abajo ${area} = ${Math.floor(area)}`);
console.log(`Para redondear para arriba ${area} = ${Math.ceil(area)}`);

console.log(`Para obtener un nro aleatorio entre 0 y 1 ${Math.random()}`);

console.log(`Para obtener un nro aleatorio entre 0 y 1000 ${Math.round(Math.random() * 1000)}`);

/////
// Operadores comparacion < > = y demas
// operadores logicos && and, || or, y ! not.

// if-else funciona cuando son pocos, pero si se pone complejo hay que buscar otra alternativa.
const password = '12#';

if (password.length >= 12 && password.includes('@')) {
    console.log('La contraseña es extremadamente fuerte con caracteres especiales');
} else if (password.length >= 8 || password.includes('#')) {
    console.log('La contraseña es lo suficientemente fuerte');
} else {
    console.log('La contraseña no es lo sufientemente larga');
}

if (isNaN(password)) { 
    console.log('La contraseña posee numeros');
}

////////
// switch-case-break-default

const calificacion = 0;

switch(calificacion) {
    case 1:
        console.log('Obtuviste un 1');
        break;
    case 2:
        console.log('Obtuviste un 2');
        break;
    case 3:
        console.log('Obtuviste un 3');
        break;
    case 4:
        console.log('Obtuviste un 4');
        break;
    case 5:
        console.log('Obtuviste un 5');
        break;
    case 6:
        console.log('Obtuviste un 6');
        break;
    case 7:
        console.log('Obtuviste un 7');
        break;
    case 8:
        console.log('Obtuviste un 8');
        break;
    case 9:
        console.log('Obtuviste un 9');
        break;
    case 10:
        console.log('Obtuviste un 10');
        break;
    default:
        console.log('Error al asignar una nota');
        break;
}

/// ciclos, bucles, loops
for (let i=0; i<5; i++){  //inicio, condicion, incremento
    console.log('ciclo: ', i);
}
console.log('ciclo terminado');

/// while controla primero la condicion
let i=0; //inicio afuera

while(i<5){ //condicion
    console.log('ciclo: ', i);
    i++; //incremento
}
console.log('ciclo terminado');

let i=0; //inicio afuera

while(i<5){ //condicion
    console.log('ciclo: ', i);
    i++; //incremento
}
console.log('ciclo terminado');

let i=0; //inicio afuera

do{ //hace sin reparar en la condicion
    console.log('ciclo: ', i);
    i++; //incremento
}while(i < -5); //condicion y ;
console.log('ciclo terminado');

////Recorre un array con for

let arreglo = [10,20,30,40,50,60,70,80,90];
for(let i=0; i<arreglo.length; i++){
    console.log(`Elemento ${i}, valor ${arreglo[i]}.`)
}

/// encontrar al ganador, break y continue
let puntajes = [50, 25, 0, 30, 100, 20, 10, 35, 70];

for(let i=0;i<puntajes.length;i++){
    if(puntajes[i]<30 ){
        continue;
        console.log("hola");} 
    // continue es para que siga e ignore
    // y salga de la estructura y siga con el codigo
    console.log('Tu puntaja es:', puntajes[i]);
    if (puntajes[i]===100){
        console.log('Felicidades sos el ganador!');
        break;
    }
}
////// Factura mejorada

const electrodomesticos = [
    {nombre:'Televisor', precio: 40000, color:'Gris'},
    {nombre:'Heladera', precio: 80000, color:'Blanco'},
    {nombre:'PC', precio: 140000, color:'Negro'},
    {nombre:'Licuadora', precio: 10000, color:'Rojo'},
    {nombre:'Aspiradora', precio: 15000, color:'Gris'},
    {nombre:'Parlante', precio: 9000, color:'Negro'},
    {nombre:'Microondas', precio: 60000, color:'Gris'},
    {nombre:'Lavarropa', precio: 80000, color:'Blanco'},
]

const impuestosPorProductos=[
    {nombre:'IVA', importe: 0.21},
    {nombre:'Importación', importe: 0.3},
    {nombre:'Ingresos Brutos', importe: 0.1},
]

// funcion tendra dos entradas: productos e impuestos
function imprimirFactura(productos, impuestos) {

    let total = 0;
    let precioConImpuestos = 0;
    let precioSinImpuestos = 0;
    let impuestosSobrePrecio = 0;


    // recorro todo el objeto de electrodomesticos
    for(let i=0; i<productos.length;i++){

        // console.log(productos[i].color);

        precioSinImpuestos = productos[i].precio;

        for(let j=0; j<impuestos.length;j++){
            impuestosSobrePrecio = 
                impuestosSobrePrecio + 
                    (precioSinImpuestos * impuestos[j].importe);
        }
              

        // calculo el total
        precioConImpuestos = precioSinImpuestos + impuestosSobrePrecio;
        total = total + precioConImpuestos;
        console.log(productos[i].nombre, '$Arg:', impuestosSobrePrecio);
    
    }
    console.log('El total facturado es $Arg:', total);
}

imprimirFactura(electrodomesticos, impuestosPorProductos);