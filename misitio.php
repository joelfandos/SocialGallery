<!DOCTYPE html>
<html>
<head>
	<title>Mi sitio</title>
	<meta charset="utf-8">
	<script type="text/javascript" src="codigo.js"></script>
</head>
<body bgcolor="54D8DA">
	<div style="text-align: right;">
	<?php
	include "./header.php";
	?>	
	</div>
	<h1>Sitio personal de <?php echo $_SESSION['name']; ?></h1>


	<h1 align="center" style="background-color: blue; color: white"  >Galeria de Imagenes</h1>
	<!-- Formulario -->
	
	<div align="">
		<h1>Subir foto</h1>
		<p id="mensaje" class="mensaje"></p>
	<form method="post" enctype="multipart/form-data" action="./services/processa.php" onsubmit="return subirFoto()">
		<input type="text" name="titulo" id="titulo" placeholder="Titulo..." >
		<br>
		<input type="file" name="imagen" id="imagen" accept="image/png, image/jpg, image/jpeg, image/gif" placeholder="Imagen" >
		<br>
		<input type="date" name="fecha" id="fecha" placeholder="Fecha" >
		<br>
		<input type="submit" name="Enviar">


	</form>
</div>
	<br>
<?php
//Conexión a la base de datos
include "./services/connection.php";
//Seleccion y muestra de datos de la base de datos (bomitar la base de datos)
$id_user=$_SESSION['id'];
$sq="SELECT tbl_gallery.name, tbl_gallery.ruta, tbl_gallery.date FROM tbl_gallery WHERE id_usuario='$id_user'";

$result = mysqli_query($conn, $sq);

 //WHERE tbl_gallery.id_usuario='"$_SESSION['id']."'

if(!empty($result) && mysqli_num_rows($result)>0){
	//Pintame el resultado(row = fila)
	while ($row = mysqli_fetch_array($result)) {
		echo "<div>";
		//Añadimos la imagen a la pagina web con la etiqueta img de HTML
		echo '<div style="background-color:blue; margin-right:5%; margin-left: 5%; margin-bottom:15px; height: 320px; width: 90%; display: inline-flex;">'.'<img src="'.$row['ruta'].'"width=300px height=300px style="margin-left: 10px; margin-top: 10px; float: left;"/>';
		//Añadimos el nombre a la pagina web con la etiqueta h2 de HTML
		echo "<ul style='letter-spacing: 1px;margin-top: 0px; margin-left:5%; font-size: 20px; color:white;'> <br><br>
				<li><strong>Nombre: </strong></b><br>".utf8_encode($row['name'])."</li>
				<li><strong>Fecha: </strong></b><br>".utf8_encode($row['date'])."</li>
				</ul><br><br><br><br><br><br><br><br></div>";
		
	}
}else{
	echo "0 resultados";
}



?>
</body>
</html>




