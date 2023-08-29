$(document).ready(function()
{
    $('#liginn').sutmit(function()
    {
        var userLS = $('#user').val();
        var passwordLS = $('#password').val();

        localStorage.setItem('Usuario', 'user');
    localStorage.setItem('Password', 'password');
    console.log(localStorage);
    })
    

    
})