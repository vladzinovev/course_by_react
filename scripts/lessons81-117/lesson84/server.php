<?php
$_POST = json_decode( file_get_contents("php://input"), true );//для JSON формата
echo var_dump($_POST);