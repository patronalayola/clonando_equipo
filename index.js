var ceentral = require ("./historia3");
const fs = require("fs");
const personaje1 = "Diana";
const personaje2 = "Diego";
const personaje3 = "Jose";
const hora_llegada = 7;
const hora_descanso = 8;
const hora_salida = 10;
const edad = Math.floor(Math.random() * 100);

console.log (ceentral.historia(personaje1, personaje2, personaje3,hora_llegada,hora_descanso, hora_salida));
