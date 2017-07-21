<?php
  require('conect.php');

  $usuarioName = $_POST['usuarioGame'];
  $usuarioEntrada = $_POST['entradaUser'];
  $usuarioSalida = $_POST['salidaUser'];

  $insertarIngreso="insert into tb_ingreso values('','$usuarioName','$usuarioEntrada','$usuarioSalida')";
  mysql_query($insertarIngreso,$link) or die("<h2>No se pudo completar la Salida</h2>");
  ?>
  <!DOCTYPE html>
<html lang="en">
  <head>
      <title>Gracias</title>
      <meta charset="utf-8">
      <script>
        window.addEventListener('load',noVolv);
        window.addEventListener('load',nombreUss);
        function noVolv(){
        window.location.hash="no-back-button";
        window.location.hash="Again-No-back-button" //chrome
        window.onhashchange=function(){window.location.hash="no-back-button";}
        }
        function nombreUss(){
          document.salida.value="hola";
        }


      </script>
      <style>
        h1{
          color:red;
        }
      </style>
  </head>
  <body>
 <center><h1>Gracias por su Visita vuelva Pronto <?php echo $usuarioName?></h1></center>
 <center><a href="index.html">Registrarse</a>
 <a href="login.html">  Login</a></center>
  </body>
</html>



