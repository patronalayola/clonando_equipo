module.exports = {
	salida: function (personaje1, personaje2, personaje3, hora_llegada, hora_descanso, hora_salida) {
	  if(hora_salida < 10){
		 return `Ya que son las ${hora_salida} pm es momento de irnos a casa.`

	} else if(hora_salida > 9){
      return `Talves falta un poco  para poder salir.`
  }
 }
}
