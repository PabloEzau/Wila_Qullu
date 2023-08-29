/*CÓDIGO DE CAMBIO DEL MENU RESPONSIVE*/
function cambiarClase(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');    
}
/*FIN DEL CÓDIGO DE CAMBIO DEL MENU RESPONSIVE*/
/*CÓDIGO DE CAMBIO DEL BANNER*/
function cambiar() 
{
	document.getElementById('banner').src="imagenes/baner 2.png"
}
function restaurar() 
{
	document.getElementById('banner').src="imagenes/baner 1.png"
}
/*FIN DEL CÓDIGO DE CAMBIO DEL BANNER*/
/*CÓDIGO DE CAMBIO DEL FORMULARIO*/
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
/*FIN DEL CÓDIGO DE CAMBIO DEL FORMULARIO*/
