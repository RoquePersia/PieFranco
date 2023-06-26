<?php
// Verifica si se recibieron datos por el método POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Obtiene los datos del formulario
  $email = $_POST['email'];
  $tema = $_POST['tema'];
  $mensaje = $_POST['mensaje'];

  // Aquí puedes implementar la lógica para enviar el correo electrónico o guardar los datos en una base de datos
  // Por ejemplo, puedes utilizar la función mail() para enviar el correo electrónico
  $to = 'roqueluispersia@gmail.com';
  $subject = 'Nuevo mensaje de contacto';
  $message = "Email: $email\nTema: $tema\nMensaje: $mensaje";
  $headers = "From: $email";

  if (mail($to, $subject, $message, $headers)) {
    // Envío de correo exitoso
    echo 'Correo enviado correctamente';
  } else {
    // Error en el envío del correo
    echo 'Error al enviar el correo';
  }
} else {
  // Si no se recibieron datos por el método POST, muestra un mensaje de error
  echo 'Error: Método no permitido';
}
?>
