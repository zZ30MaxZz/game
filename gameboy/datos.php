<?php
  require('conect.php');

  $usuarioName = $_POST['nomb'];
  $usuariopass = $_POST['passUser'];
  $usuarioSex = $_POST['sex'];
  $usuarioDep = $_POST['depart'];
  $usuarioCiu = $_POST['ciu'];
  $usuarioColor = $_POST['colors'];
  $usuarioNacim = $_POST['nac'];

  $insertarUsuario="insert into tb_usuario(nombre,imagen) values('$usuarioName','$usuariopass')";

  $insertarDatos="insert into tb_datos_usuario values('','$usuarioName','$usuarioSex','$usuarioDep','$usuarioCiu','$usuarioColor','$usuarioNacim')";

  mysql_query($insertarUsuario,$link) or die("<h2>Usted ya ha registrado a $usuarioName</h2>");
  mysql_query($insertarDatos,$link) or die("<h2>Estamos mejorando el sitio por favor Vuelva a intentarlo mas tarde</h2>");



  header('Location: login.html');
?>