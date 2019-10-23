//Login

function login(){
	var user = document.getElementById('user').value;
	var password = document.getElementById('password').value;
	if(user == '' && password == ''){
		document.getElementById('mensaje').innerHTML = 'El campo nombre y la contraseña son obligatorios!';	
		document.getElementById('mensaje').style.display = 'block';
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('user').style.border = '1px solid red';
		document.getElementById('password').style.border = '1px solid red';
		return false;	
	}else if (user == '') {
		document.getElementById('mensaje').innerHTML = 'El campo nombre es obligatorio!';
		document.getElementById('mensaje').style.display = 'block';	
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('user').style.border = '1px solid red';
		document.getElementById('password').style.border = '1px solid #ccc';
		return false;
	}else if (password == '') {
		document.getElementById('mensaje').innerHTML = 'La contraseña es obligatoria!';
		document.getElementById('mensaje').style.display = 'block';	
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('user').style.border = '1px solid #ccc';
		document.getElementById('password').style.border = '1px solid red';
		return false;
	}else{
		return true;
	}
}


//Subir foto
function subirFoto(){
	var titulo = document.getElementById('titulo').value;
	var imagen = document.getElementById('imagen').value;
	var fecha = document.getElementById('fecha').value;
	
	if(titulo == '' && imagen == '' && fecha == ''){
		document.getElementById('mensaje').innerHTML = 'El campo titulo, la imagen y la fecha son obligatorios!';
		document.getElementById('mensaje').style.display.border = 'block';		
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('titulo').style.border = '1px solid red';
		document.getElementById('imagen').style.border = '1px solid red';
		document.getElementById('fecha').style.border = '1px solid red';
		return false;	
	}else if (titulo == '' && imagen == '') {
		document.getElementById('mensaje').innerHTML = 'El campo titulo y la imagen son obligatorios!';
		document.getElementById('mensaje').style.display = 'block';	
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('titulo').style.border = '1px solid red';
		document.getElementById('imagen').style.border = '1px solid red';
		document.getElementById('fecha').style.border = '1px solid #ccc';
		return false;
	}else if (imagen == '' && fecha == '') {
		document.getElementById('mensaje').innerHTML = 'La imagen y la fecha son obligatorios!';
		document.getElementById('mensaje').style.display = 'block';	
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('imagen').style.border = '1px solid red';
		document.getElementById('fecha').style.border = '1px solid red';
		document.getElementById('titulo').style.border = '1px solid #ccc';
		return false;
	}else if (titulo == '' && fecha == '') {
		document.getElementById('mensaje').innerHTML = 'El titulo y la fecha son obligatorios!';
		document.getElementById('mensaje').style.display = 'block';	
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('titulo').style.border = '1px solid red';
		document.getElementById('fecha').style.border = '1px solid red';
		document.getElementById('imagen').style.border = '1px solid #ccc';
		return false;
	}else if (imagen == '') {
		document.getElementById('mensaje').innerHTML = 'La imagen es obligatoria!';
		document.getElementById('mensaje').style.display = 'block';	
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('imagen').style.border = '1px solid red';
		document.getElementById('titulo').style.border = '1px solid #ccc';
		document.getElementById('fecha').style.border = '1px solid #ccc';
		return false;
	}else if (fecha == '') {
		document.getElementById('mensaje').innerHTML = 'La fecha es obligatoria!';
		document.getElementById('mensaje').style.display = 'block';	
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('fecha').style.border = '1px solid red';
		document.getElementById('titulo').style.border = '1px solid #ccc';
		document.getElementById('imagen').style.border = '1px solid #ccc';
		return false;
	}else if (titulo == '') {
		document.getElementById('mensaje').innerHTML = 'El titulo es obligatorio!';
		document.getElementById('mensaje').style.display = 'block';	
		document.getElementById('mensaje').style.border = "thick solid red";
		document.getElementById('titulo').style.border = '1px solid red';
		document.getElementById('imagen').style.border = '1px solid #ccc';
		document.getElementById('fecha').style.border = '1px solid #ccc';
		return false;
	}else{
		return true;
	}
}