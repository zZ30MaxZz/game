<?php
  require('conect2.php');

  $usuarios="select * from tb_datos_usuario ";
 // mysql_query($usuarios,$link) or die("<h2>no se puede consultar la base de datos</h2>");
  $resultado=$mysqli->query($usuarios);
?>
  <!DOCTYPE html>
<html lang="en">
  <head>
      <title>Administración de la Página</title>
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
 <center><h1>Todo sobre los Usuarios</h1></center>
 <table border="1" width="80%">
   <thead>
     <tr>
       <td><b>Usuario</b></td>
       <td><b>Sexo</b></td>
       <td><b>Fecha de Nacimiento</b></td>
       <td><b>Departamento</b></td>
       <td><b>Distrito</b></td>
       <td><b>Colores</b></td>
       <td><b>Ingresos a la web</b></td>
     </tr>

   </thead>
     <tbody>
       <?php while($row=$resultado->fetch_assoc()){?>
        <tr>
          <td><?php echo$row['nombre'];?></td>
          <td><?php echo$row['sexo'];?></td>
          <td><?php echo$row['nacimiento'];?></td>
          <td><?php echo$row['departamento'];?></td>
          <td><?php echo$row['ciudad'];?></td>
          <td><?php echo$row['colores'];?></td>
          <td><a href="historial.php?id=<?php echo $row['nombre'];?>">Ver</a></td>
        </tr>
        <?php } ?>
     </tbody>
 </table>

 <a href="index.html">Registrarse</a>
  </body>
</html>



