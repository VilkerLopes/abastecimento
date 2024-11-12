<?php
$dbhost = 'localhost';
$dbusername = 'root';
$dbpassword = ''; 
$dbname = 'abastecimento';
$port = 3308;
$conexao = new mysqli($dbhost, $dbusername, $dbpassword, $dbname, $port);

if ($conexao->connect_error) {
    die("Falha na conexão: " . $conexao->connect_error);
}
?>