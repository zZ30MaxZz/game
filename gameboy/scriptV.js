window.addEventListener('load',pass);
window.addEventListener('load',combo);
window.addEventListener('load',imgAll);
var nick="";
var nickPass="";
var op;
var n1="";
var n2="";
var n3="";

function pass(){
        var porNombre=document.getElementsByName("imagenPass");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<porNombre.length;i++)
        {
            if(porNombre[i].checked)
                resultado=porNombre[i].value;
        }
        	resultado;
        	passUsuario(resultado);
//        	document.user.salida.value=nickPass;
        	document.user.passnick.value=nickPass;

}
function passUsuario(entrada){
	nickPass="";
	combo();
	if (entrada==1)
		 nickPass+=n1;
	else
		if(entrada==2)
			nickPass+=n2;
		else
			nickPass+=n3;
}

function setName(entrada){
	nick=entrada.value;
	document.validar.nickn.value=nick;
	document.user.passnick.value=nickPass;
}
function val_letras(e)
		{
			key=e.keycode || e.which;
			teclado=String.fromCharCode(key).toLowerCase();
			letras="abcdefghijklmnñopqrstuvwxyz";
			if(letras.indexOf(teclado)==-1 ){
				return false;
			}
		}

function combo(){
		ops=parseInt(document.user.opciones.value);

        if(ops==1)
        	nickPass="a";
    	else
        	if(ops==2)
        		nickPass="b";
        	else
        		nickPass="g";
        //document.user.salida.value=op;
    }

function imgAll(){
	op=parseInt(document.user.opciones.value);
	combo();
	switch(op){
		case 1:
		    n1=numRand();
			document.user.img1.src="imagenes/animales/"+n1+".jpg";
			n2=numRand();
			document.user.img2.src="imagenes/animales/"+n2+".jpg";
			n3=numRand();
			document.user.img3.src="imagenes/animales/"+n3+".jpg";
			break;
		case 2:
			n1=numRand();
			document.user.img1.src="imagenes/juguetesB/"+n1+".jpg";
			n2=numRand();
			document.user.img2.src="imagenes/juguetesB/"+n2+".jpg";
			n3=numRand();
			document.user.img3.src="imagenes/juguetesB/"+n3+".jpg";
			break;
		case 3:
			n1=numRand();
			document.user.img1.src="imagenes/juguetesG/"+n1+".jpg";
			n2=numRand();
			document.user.img2.src="imagenes/juguetesG/"+n2+".jpg";
			n3=numRand();
			document.user.img3.src="imagenes/juguetesG/"+n3+".jpg";
			break;
	}
	passUsuario(resultado);
	setInterval(imgAll,10000);
	document.user.passnick.value=nickPass;
	nick=document.user.nombreUsuario.value;
}
function numRand(){
	n=parseInt(11*(Math.random()));

	if(n>0 && n<10)
		return n;
	else
		if(n>9)
					return n-1;
		else
					return n+1;
	
}
function radioS(){
	opciones = document.getElementsByName("imagenPass");
	var seleccionado = false;
for(var i=0; i<opciones.length; i++) {    
  if(opciones[i].checked) {
    seleccionado = true;
    break;
  }
  localStorage.setItem('nickname', nick);
  var valorlocal = localStorage.getItem('nickname');
}
 
if(!seleccionado) {
	alert('[ERROR] Debes selecionar una contraseña');
  return false;
}
  localStorage.setItem('nickname', nick);
  localStorage.setItem('nickname_pass', nickPass);
}