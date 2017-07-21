<?php
  $link=mysql_connect("localhost","root","") or die("<h2>No se encuentra el servidor</h2>");
    $db=mysql_select_db("db_gameboy",$link)or die("<h2>Error de conexión</h2>");
?>