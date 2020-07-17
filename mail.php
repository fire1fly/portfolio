<?php
// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// Load Composer's autoloader
require './vendor/autoload.php';

$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$theme = $_POST['theme'];
$message = $_POST['message'];

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
    $mail->isSMTP();                                            // Send using SMTP
    $mail->Host       = 'smtp.beget.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
    $mail->Username   = 'тут почта бегета';                     // SMTP username
    $mail->Password   = 'мой пароль';                               // SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 465;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('почта бегета', 'любое имя');
    $mail->addAddress('почта на которую принимаю');               // Name is optional

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Заявка с портфолио';
    $mail->Body    = '<h2>' . $name . ' оставил заявку</h2><br>Его телефон: ' . $phone . '<br>Почта: ' . $email . '<br><h3>Тема: ' . $theme . '.</h3><br> Сообщение: ' . $message;
    $mail->AltBody = '';

    $mail->send();
    header('Location: https://laktionoff.ru/thanks.html');
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
