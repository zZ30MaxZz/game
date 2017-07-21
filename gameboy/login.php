<?php
  require('conect.php');

  $usuarioName = $_POST['nickn'];
  $usuariopass = $_POST['passnick'];

  $q = mysql_query("SELECT * FROM tb_usuario WHERE nombre = '$usuarioName' and imagen='$usuariopass'");
 //verificamos si el user exite con un condicional
  if($usuarioName!="" && strlen($usuariopass)>1){
   if( mysql_num_rows($q) == 0){
    echo"<script language='javascript'>alert('Usuario o contraseña incorrecto');</script>";
     echo"<script language='javascript'>javascript:window.history.go(-1);</script>";
   }
   else{
     
     header('Location: juego.html');
   }
  }
   else{
    echo"<script language='javascript'>alert('Faltan datos');</script>";
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