<?php
session_start();
require 'config.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usuario = $_POST['usuario'];
    $senha = $_POST['senha'];
    $funcao = $_POST['funcao'];

    // Prepara a consulta
    $stmt = $conexao->prepare("SELECT * FROM usuarios WHERE usuario = ? AND funcao = ?");
    $stmt->bind_param('ss', $usuario, $funcao); 
    $stmt->execute();
    $result = $stmt->get_result();
    $usuario = $result->fetch_assoc();

    
    if ($usuario && password_verify($senha, $usuario['senha'])) {
        $_SESSION['funcao'] = $funcao;
        $_SESSION['usuario'] = $usuario;

    
        if ($funcao === 'admin') {
            header("Location: registrarusuario.html");
        } else {
            header("Location: registrar.html");
        }
        exit();
    } else {
        echo "Credenciais inválidas!";
    }
}
?>