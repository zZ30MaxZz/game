window.addEventListener('load',pass);
window.addEventListener('load',combo);
window.addEventListener('load',imgAll);
window.addEventListener('load',noVolver);
var nick="";
var nickPass="";
var ops=1;
var n1="";
var n2="";
var n3="";
var entrar;

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
        	document.loginUser.passnick.value=nickPass;

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
	document.loginUser.passnick.value=nickPass;
	document.loginUser.nickn.value=nick;
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
        if(ops==1)
        	nickPass="a";
    	else
        	if(ops==2)
        		nickPass="b";
        	else
        		nickPass="g";
    }

function imgAll(){
	//op=1 ;
	numRand2();
	combo();
	switch(ops){
		case 1:
		    n1=numRand();
			document.loginUser.img1.src="imagenes/animales/"+n1+".jpg";
			n2=numRand();
			document.loginUser.img2.src="imagenes/animales/"+n2+".jpg";
			n3=numRand();
			document.loginUser.img3.src="imagenes/animales/"+n3+".jpg";
			break;
		case 2:
			n1=numRand();
			document.loginUser.img1.src="imagenes/juguetesB/"+n1+".jpg";
			n2=numRand();
			document.loginUser.img2.src="imagenes/juguetesB/"+n2+".jpg";
			n3=numRand();
			document.loginUser.img3.src="imagenes/juguetesB/"+n3+".jpg";
			break;
		case 3:
			n1=numRand();
			document.loginUser.img1.src="imagenes/juguetesG/"+n1+".jpg";
			n2=numRand();
			document.loginUser.img2.src="imagenes/juguetesG/"+n2+".jpg";
			n3=numRand();
			document.loginUser.img3.src="imagenes/juguetesG/"+n3+".jpg";
			break;
	}

	passUsuario(resultado);
	setInterval(imgAll,10000);
	document.loginUser.passnick.value=nickPass;
	nick=document.loginUser.nombreUsuario.value;
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
function numRand2(){
	ops=Math.floor(Math.random()*3+1);
	
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
  localStorage.setItem('nickname_pass', nickPass);
  var valorlocal = localStorage.getItem('nickname');
}
 
if(!seleccionado) {
	alert('[ERROR] Debes selecionar una contraseña');
  return false;
}
  fecha_entrada();
  document.loginUser.nickn.value=nick;
  document.loginUser.passnick.value=nickPass;
  document.loginUser.ingreso_user.value=entrar;
  localStorage.setItem('nickname', nick);
  localStorage.setItem('nickname_pass', nickPass);
  localStorage.setItem('inicio', entrar);
}
function noVolver(){
   window.location.hash="no-back-button";
   window.location.hash="Again-No-back-button" //chrome
   window.onhashchange=function(){window.location.hash="no-back-button";}
}
function fecha_entrada(){
	var dat=new Date();

	if( (dat.getMonth()+1).toString().length==1)
		entrar=dat.getFullYear()+ "-0" + (dat.getMonth() +1) + "-";
	else
		entrar=dat.getFullYear()+ "-" + (dat.getMonth() +1) + "-";

	if((dat.getDate()+1).toString().length==1)
		entrar+="0"+ dat.getDate();
	else
		entrar+=dat.getDate();

	entrar+=" ";
	if( (dat.getHours()).toString().length==1)
		entrar+="0" +dat.getHours() + ":";
	else
		entrar+=dat.getHours() + ":";

	if((dat.getMinutes()).toString().length==1)
		entrar+="0"+ dat.getMinutes()+":";
	else
		entrar+=dat.getMinutes()+":";
	if((dat.getSeconds()).toString().length==1)
		entrar+="0"+ dat.getSeconds();
	else
		entrar+=dat.getSeconds();
	document.loginUser.ingreso_user.value=entrar;

}
