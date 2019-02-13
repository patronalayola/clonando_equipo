//VARIABLES
var ceentral = require ("./final");
const fs = require("fs");

//VARIABLES DE GENERACION
const personaje1 = "Diana";
const personaje2 = "Diego";
const personaje3 = "Jose";
const hora_llegada = 7;
const hora_descanso = 8;
const hora_salida = 10;
const edad = Math.floor(Math.random() * 100);

fs.readFile("personajes.txt","utf-8",function(err,contenido){
  if(err){
    throw err;
  }

const personajes = contenido.split(",");
const numeroPersonaje = Math.floor(Math.random() * personajes.length);
const personajeRandom = personajes[numeroPersonaje];

const historiaCompleta = juntarHistoria(personajeRandom);

console.log(historiaCompleta);

});

fs.writeFile("historia.txt", historiaCompleta, function(err){
  if(err){
    throw err;
  }
});

function juntarHistoria(personaje){
  const introHistoria = intro.historia(personaje, lugar);
  const finalHistoria = final.historia(personaje, lugar);
  const historiaCompleta = introHistoria + finalHistoria;
  return historiaCompleta;

}
