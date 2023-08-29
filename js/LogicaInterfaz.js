document.querySelector('#btnRegistro').addEventListener('click', registrar);
mostrarDatos();

function registrar()
{
    var aNuevoUsuario = [],
        sNombre = '',
        sCelular = '',
        sUsuario = '',
        sPass = '',
    sNombre = document.querySelector('#txtnombre').value;
    sCelular = document.querySelector('#txtcelular').value;
    sUsuario = document.querySelector('#txtusuario').value;
    sPass = document.querySelector('#txtpass').value;

    aNuevoUsuario.push(sNombre,sCelular,sUsuario,sPass);
    registroUsuario(aNuevoUsuario);
    mostrarDatos();
}
function mostrarDatos()
{
    var usuarios = getListaUsuarios(),
        tbody=document.querySelector('#tblusuario tbody');
    tbody.innerHTML = '';
    for(var i = 0; i < usuarios.length; i++)
    {
        var fila = document.createElement('tr'),
            celdaNombre = document.createElement('td'),
            celdaCelular = document.createElement('td'),
            celdaUsuario = document.createElement('td'),
            celdaPass = document.createElement('td');

        celdaNombre.innerHTML = usuarios[i][0];
        celdaCelular.innerHTML = usuarios[i][1];
        celdaUsuario.innerHTML = usuarios[i][2];
        celdaPass.innerHTML = usuarios[i][3];

        fila.appendChild(celdaNombre);
        fila.appendChild(celdaCelular);
        fila.appendChild(celdaUsuario);
        fila.appendChild(celdaPass);

        tbody.appendChild(fila);        
    }
}
