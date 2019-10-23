<!DOCTYPE html>
<html>
<head>
	<title>Práctica</title>
	<meta charset="utf-8">
	<script type="text/javascript" src="codigo.js"></script>
</head>
<body bgcolor="54D8DA">
	<h1 align="center" style="background-color: blue; color: white"  >Galeria de Imagenes</h1>
<div align="center">
	<h1>Login</h1>
	<p id="mensaje" class="mensaje"></p>
	<form method="post" action="./services/login.proc.php" onsubmit="return login()">
		<input type="text" name="user" id="user" placeholder="Inserta el usuario..." ><br/>
		<input type="password" name="password" id="password" placeholder="Inserta el password" ><br/><br/>
		<input type="submit" name="Enviar">
	</form>
</div>
	<br><br>
</body>
</html>