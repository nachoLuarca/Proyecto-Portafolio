$(function () {
  //alert("Hola mundo!!!")




  //Definir eventos click para el boton REGISTRAR
  //NOMBRE
  $('.btnRegistrar').click(function() 
  {
      let nombre = '';
      nombre = $('.txtNombre').val();
      if (nombre == '')
      {
        alert('No se ingreso el nombre');
        $('.txtNombre').focus();
        return;
      }
  })
  //APELLIDO
  $(".btnRegistrar").click(function()
  {
    let apellido = '';
    apellido = $(".txtApellido").val();
    if(apellido == '')
    {
      alert('No se ingreso apellido');
      $(".txtApellido").focus();
      return;
    }
  })
  //EMAIL
  $(".btnRegistrar").click(function()
  {
    let email ='';
    email = $(".txtEmail").val();
    if(email == '')
    {
      alert('No se ingreso email');
      $(".txtEmail").focus();
      return;
    }
  })
  //CONTRASEÑA
  $(".btnRegistrar").click(function()
  {
    let contraseña ='';
    contraseña = $(".txtContraseña").val();
    if(contraseña == '')
    {
      alert('No se ingreso contraseña');
      $(".txtContraseña").focus();
      return;
    }
  })
  //CELULAR
  $(".btnRegistrar").click(function()
  {
    let celular ='';
    celular = $(".txtCelular").val();
    if(celular == '')
    {
      alert('No ingreso su numero de celular');
      $(".txtCelular").focus();
      return;
    }
  })

  $(".btnRegistrar").click(function()
  {
    let celular ='';
    celular = $(".txtServicios").val();
    if(celular == '')
    {
      alert('No ingreso servicios');
      $(".txtServicios").focus();
      return;
    }
  })

  alert('La información entragada es: ' +
          $('.txtNombre').val() + '.\n' +
          $('.txtApellido').val() + '.\n' +
          $('.txtEmail').val() + '.\n' +
          $('.txtContraseña').val() + '.\n' +
          $('.txtCelular').val() + '.\n' +
          $('.txtServicios').val() + '.\n' 
    
        );

  

})