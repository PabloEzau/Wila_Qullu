function cambiar() 
{
	document.getElementById("banner").src="imagenes/banner 2.png"
}
function restaurar() {
	document.getElementById("banner"). src="imagenes/banner 2.png"
}


var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function(){
    if(this.value.length>=1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}
