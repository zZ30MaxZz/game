<?php
  $mysqli=new mysqli("localhost","root","","db_gameboy");
  if (mysqli_connect_error()){
  	echo'Conexion fallida:',mysqli_connect_error();
  	exit();
  }
?>