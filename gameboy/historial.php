<?php
  require('conect2.php');
  $nombreUser=$_GET['id'];
  $usuarios="select * from tb_ingreso where nombre='$nombreUser' ";
 // mysql_query($usuarios,$link) or die("<h2>no se puede consultar la base de datos</h2>");
  $resultado=$mysqli->query($usuarios);
?>
  <!DOCTYPE html>
<html lang="en">
  <head>
      <title>Historial del usuario</title>
      <meta charset="utf-8">
      <script>
        window.addEventListener('load',noVolv);
        function noVolv(){
        window.location.hash="no-back-button";
        window.location.hash="Again-No-back-button" //chrome
        window.onhashchange=function(){window.location.hash="no-back-button";}
        }
      </script>
  </head>
  <body>
 <center><h1>Usuario: <?php echo $nombreUser;?></h1></center>
 <table border="1" width="80%">
   <thead>
     <tr>
       <td><b>Fecha de Ingreso</b></td>
       <td><b>Fecha de Salida</b></td>
     </tr>

   </thead>
     <tbody>
       <?php while($row=$resultado->fetch_assoc()){?>
        <tr>
          <td><?php echo$row['fecha_inicio'];?></td>
          <td><?php echo$row['fecha_fin'];?></td>
        </tr>
        <?php } ?>
     </tbody>
 </table>

 <a href="admi.php">volver</a>
  </body>
</html>

