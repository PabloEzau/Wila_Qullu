var listaUsuarios =
[
    ['Pablo','1234567','pablito', '12345']
];
function registroUsuario(pNuevoUsuario)
{
    var listaUsuarios = getListaUsuarios();
    listaUsuarios.push(pNuevoUsuario);
    localStorage.setItem('listaUsuariosLS', JSON.stringify(listaUsuarios));
}
function getListaUsuarios()
{
    var listaUsuariosLocal = JSON.parse(localStorage.getItem('listaUsuariosLS'));
    if(listaUsuariosLocal == null)
    {
        listaUsuariosLocal = listaUsuarios;
    }
    return listaUsuariosLocal;
}
