//Modulos
var ceentral = require ("./historia2");
var entrada = require ('./historia1');
var salida = require ('./historia3')

const fs = require('fs');

const personaje1 = "Diana";
const personaje2 = "Diego";
const personaje3 = "Jose";
const hora_llegada = 7;
const hora_descanso = 8;
const hora_salida = 10;

fs.readFile('Personajes.txt', 'utf-8', function(err, contenido){
   if(err){
   	 throw err;
   }
const personajes = contenido.split(',');
const numeroPersonaje = Math.floor(Math.random() * personajes.length);
const personajeRandom = personajes[numeroPersonaje];

const historiaCompleta = juntarHistoria(personajeRandom);

console.log(personajes);
console.log(numeroPersonaje);
console.log(personajeRandom);
console.log(historiaCompleta);

fs.writeFile('historia.txt', historiaCompleta, function(err){
   if(err){
    throw err;
   }
});
//const personajeRandom = personajes[Math.floor(Math.random() * personajes.length - 1)];
   //console.log(personajes.length);
   //console.log(personajes[personajes.length - 1]);
   //console.log(contenido.split(','));
});


// Partes de Histroia

function juntarHistoria(personaje){
 const ceentralLlegada = ceentral.llegada(personaje1,  hora_llegada, hora_descanso, hora_salida); 
 const salidaSalida = salida.salida(hora_llegada, hora_descanso, hora_salida);
 const historiaCompleta = ceentralLlegada +	salidaSalida;
 return historiaCompleta;

 //console.log (ceentral.llegada(personaje1, personaje2, personaje3, hora_llegada, hora_descanso, hora_salida));

}


