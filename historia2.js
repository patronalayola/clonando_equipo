module.exports = {
	llegada: function (personaje1, personaje2, personaje3, hora_llegada, hora_descanso, hora_salida) {
	  if(hora_descanso < 9){
		 return `Ya que llegaron todos ${personaje1}, ${personaje2} y ${personaje3}, en clase Anuar da explicaciones de algun tema, ya avanzada la clase el nos da un breve descanso porque ya son las ${hora_descanso} pm.`

	} else if(hora_descanso > 8){
      return `Talves falta un poco de explicaciones y nuestro descanso se pospondra o tendremos que esperar a que sean las ${hora_salida} pm para poder salir.`
  }
 }
}
