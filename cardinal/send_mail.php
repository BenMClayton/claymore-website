<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['contact_name']));
    $email = htmlspecialchars(trim($_POST['contact_email']));
    $phone = htmlspecialchars(trim($_POST['contact_phone']));
    $subject = htmlspecialchars(trim($_POST['contact_subject']));
    $message = htmlspecialchars(trim($_POST['contact_message']));

    $to = "ValetingClaymore@gmail.com";
    $subject = "New Contact Form Submission: " . $subject;
    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Email successfully sent.";
    } else {
        echo "Email sending failed.";
    }
}
?>
