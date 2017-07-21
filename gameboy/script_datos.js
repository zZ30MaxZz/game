window.addEventListener('load',fechaHoy);
window.addEventListener('load',cargarDistritos);
window.addEventListener('load',repasar);
window.addEventListener('load',color);

var depa;
var dist;
var fechaNacim;
var sexo="";
var r;
var g;
var b;
var y;
colores="0000";
var f = new Date();
function repasar(){
	    var valorsex=document.getElementsByName("imagenPass");
        // Recorremos todos los valores del radio button para encontrar el
        // seleccionado
        for(var i=0;i<valorsex.length;i++)
        {
            if(valorsex[i].checked)
                sexo=valorsex[i].value;
        }
        var valorlocalnick = localStorage.getItem('nickname');
	    var valorlocalnickPass = localStorage.getItem('nickname_pass');
	    document.datosUser.nomb.value=valorlocalnick;	
	    document.datosUser.passUser.value=valorlocalnickPass;	


}
var arrayDepas=new Array(
        new Array(1,1,"Abancay"),
        new Array(1,2,"Andahuaylas"),
        new Array(1,3,"Chincheros"),
        new Array(1,4,"Antabamba"),
        new Array(1,5,"Cotabambas"),
        new Array(1,6,"Grau"),
        new Array(1,7,"Aymaraes"),
        new Array(2,1,"Puquio"),
        new Array(3,1,"Arequipa")
    );
function cargarDistritos(){
	indicedep = document.getElementById("opcionDep");
	var valor=indicedep.selectedIndex;
	arrayValores=arrayDepas;
	
    if(valor==0)
    {
        document.getElementById("opcionDis").disabled=true;
    }
    else{
        document.getElementById("opcionDis").options.length=0;
        for(i=0;i<arrayValores.length;i++)
        {
            if(arrayValores[i][0]==valor)
            {
                document.getElementById("opcionDis").options[document.getElementById("opcionDis").options.length]=new Option(arrayValores[i][2], arrayValores[i][1]);
            }
        }
        document.getElementById("opcionDis").disabled=false;
    }
    seleccionado();
    //depa="depa:"+document.datosUser.opcionDep.text;
    //dist="disp:"+document.datosUser.opcionDep.text;
}
function seleccionado(value)
{
    var v1 = document.getElementById("opcionDep");
    var valor1 = v1.options[v1.selectedIndex].value;
    depa = v1.options[v1.selectedIndex].text;
    var v2 = document.getElementById("opcionDis");
    var valor2 = v2.options[v2.selectedIndex].value;
    dist= v2.options[v2.selectedIndex].text;

	//document.datosUser.salida.value=depa+dist;
}
function color(){
	if(document.getElementById("c1").checked)
		r="1";
	else
		r="0";
	if(document.getElementById("c2").checked)
		g="1";
	else
		g="0";
	if(document.getElementById("c3").checked)
		b="1";
	else
		b="0";
	if(document.getElementById("c4").checked)
		y="1";
	else
		y="0";
	colores=r+g+b+y;
}
function fechaHoy(){
	//var fecha=(f.getFullYear()+ "-" + (f.getMonth() +1) + "-" + f.getDate());
	fecha="";
	if( (f.getMonth()+1).toString().length==1)
		fecha=f.getFullYear()+ "-0" + (f.getMonth() +1) + "-";
	else
		fecha=f.getFullYear()+ "-" + (f.getMonth() +1) + "-";

	if((f.getDate()+1).toString().length==1)
		fecha+="0"+ f.getDate();
	else
		fecha+=f.getDate();
	document.datosUser.cumpleanios.value=fecha;
	fechaNacim=fecha;
}
function radioS2(){
	indicedep = document.getElementById("opcionDep");
    indicedis = document.getElementById("opcionDis");
    if(indicedep.selectedIndex==0) {
	  alert('Debes selecionar un departamento y distrito');
    	return false;
    }
    else{
   	 if(sexo==""){
    		alert('Falta selecionar tu sexo');
    		return false;
   	 }
   	 else
   	 	if (colores=="0000") {
   	 		alert('Falta al menos un color');
    		return false;
   	 	}
	}

	document.datosUser.sex.value=sexo;	
	document.datosUser.depart.value=depa;	
	document.datosUser.ciu.value=dist;	
	document.datosUser.colors.value=colores;   
    document.datosUser.nac.value=fechaNacim;    
}


