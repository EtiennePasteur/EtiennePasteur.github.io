<?php
$message = "Line 1\r\nLine 2\r\nLine 3";
$message = wordwrap($message, 70, "\r\n");
$i = 0;
$i = mail('et.pasteur@hotmail.fr', 'Mon Sujet', $message);
var_dump($i);
?>
