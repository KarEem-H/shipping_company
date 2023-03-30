<?php
// get the form data
$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

// set the recipient email address
$to = "youremail@example.com";

// set the email subject
$subject = "Contact form submission: " . $subject;

// set the email body
$body = "Name: " . $name . "\n\n";
$body .= "Email: " . $email . "\n\n";
$body .= "Message: " . $message;

// set the email headers
$headers = "From: " . $name . " <" . $email . ">\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// send the email
if (mail($to, $subject, $body, $headers)) {
  // success
