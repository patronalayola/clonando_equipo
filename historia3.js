module.exports = {
  historia: function(personaje1, personaje2, personaje3, hora_llegada, hora_descanso_, hora_salida){
  if(hora_salida < 10){
    return "El equipo piensa que todavía no son las " + hora_salida + "por lo que esperamos a que termine la clase"
  } else if(hora_salida >= 10){
    return "Estamos contentos porque ya son las " + hora_salida
  }
  }
}
