<?php
  require('conect.php');

  $usuario = $_POST['nickn'];

  $q = mysql_query("SELECT * FROM tb_usuario WHERE nombre = '$usuario'");
 //verificamos si el user exite con un condicional
  if($usuario!=""){
   if( mysql_num_rows($q) == 0){ 
 	 echo"<script language='javascript'>alert('Este usuario está Disponible');</script>";
     echo"<script language='javascript'>javascript:window.history.go(-1);</script>";
   }
   else{
 	   echo"<script language='javascript'>alert('Éste usuario ya existe, por favor ingresa otro');</script>";
     echo"<script language='javascript'>javascript:window.history.go(-1);</script>";
   }
  }
   else{
   	echo"<script language='javascript'>alert('Debes ingresar un NICK');</script>";
    echo"<script language='javascript'>javascript:window.history.go(-1);</script>";
  }
 


 /*
ob_start();
// Uilizamos la función header
header('Location: index.html');
// insertamos función al final del codigo
ob_end_flush();*/

 //header("Location: ". $MM_redirectLoginFailed );
 //header("Location: " .$_COOKIE['HTTP_REFERER'] );
 //header('Location:' . getenv('HTTP_REFERER'));
 //header('Location: index.html');
?>