<?php
    $subject = 'Заявка с сайта "КРЕАТИВНОЕ АГЕНСТВО #PUCHA" ';
    $mess = '';
    $mess .= '<hr>';
    if(isset($_POST['info'])) {
        $subject = $_POST['info'];
    }
    if(isset($_POST['user_name'])) {
        $name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 100);
        $mess .= '<b>Имя:</b> ' . $name . '<br>';
    }
    if(isset($_POST['user_phone'])) {
        $tel = substr(htmlspecialchars(trim($_POST['user_phone'])), 0, 100);
        $mess .= '<b>Телефон:</b> ' . $tel . '<br>';
    }
    if(isset($_POST['user_phone2'])) {
        $tel2 = substr(htmlspecialchars(trim($_POST['user_phone2'])), 0, 100);
        $mess .= '<b>Телефон2:</b> ' . $tel2 . '<br>';
    }
    if(isset($_POST['user_theme'])) {
        $theme = substr(htmlspecialchars(trim($_POST['user_theme'])), 0, 100);
        $mess .= '<b>Тема консультации:</b> ' . $theme . '<br>';
    }
    if(isset($_POST['user_email'])) {
        $mail = substr(htmlspecialchars(trim($_POST['user_email'])), 0, 100);
        $mess .= '<b>Почта:</b> ' . $mail . '<br>';
    }
    if(isset($_POST['user_message'])) {
        $user_message = substr(htmlspecialchars(trim($_POST['user_message'])), 0, 100);
        $mess .= '<b>СООБЩЕНИЕ:</b> ' . $user_message . '<br>';
    }
    $mess .= '<hr>';
    // подключаем файл класса для отправки почты
    require 'class.phpmailer.php';

    $mail = new PHPMailer();
    $mail->AddAddress('pucha.family@gmail.com','');   // кому - адрес, Имя
    $mail->IsHTML(true);                        // выставляем формат письма HTML
    $mail->Subject = $subject; // тема письма
    $mail->CharSet = "UTF-8";                   // кодировка
    $mail->Body = $mess;
    if(isset($_FILES['file'])) {
            if($_FILES['file']['error'] == 0){
            $mail->AddAttachment($_FILES['file']['tmp_name'], $_FILES['file']['name']);
        }
    }
    // отправляем наше письмо
    if (!$mail->Send()){
        die ('Mailer Error: ' . $mail->ErrorInfo);
    }else{
        echo 'true';
    }?>