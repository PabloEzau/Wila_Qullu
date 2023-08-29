function registro()
{
	var nnombre = document.getElementById("nombre").value;
	var ncelular = document.getElementById("celular").value;
	var nusuario = document.getElementById("usuario").value;
	var npass = document.getElementById("pass").value;
	if(nnombre=="")
	{
		alert("EL NOMBRE ES OBLIGATORIO DIGITARLO");
		document.getElementById("nombre").focus();
	}
	else
	{
		if(ncelular=="")
		{
			alert("EL CELULAR ES OBLIGATORIO DIGITARLO");
			document.getElementById("celular").focus();
		}
		else
		{
			if(nusuario=="")
			{
				alert("EL USUARIO ES OBLIGATORIO DIGITARLO");
				document.getElementById("usuario").focus();
			}
			else
			{
				if(npass=="")
				{
					alert("LA CONTRASEÑA ES OBLIGATORIO DIGITARLO");
					document.getElementById("pass").focus();
				}
				else
				{
					console.log(nnombre + " " + ncelular + " " + nusuario + " " + npass );
					document.getElementById("nombre").value="";
					document.getElementById("celular").value="";
					document.getElementById("usuario").value="";
					document.getElementById("pass").value="";
					document.getElementById("nombre").focus();
				}
			}
		}
		
	}
	
}