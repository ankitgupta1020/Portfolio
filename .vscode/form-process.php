<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "ankitgupta1181@gmail.com";
  $subject = "New Message from Portfolio Website";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  mail($to, $subject, $body);
}
?>
