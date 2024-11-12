<?php
include 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $funcao = $_POST['funcao'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    // Verificar se o nome de usuário já existe
    $stmt = $pdo->prepare("SELECT id FROM usuarioS WHERE usuario = ?");
    $stmt->execute([$usuario]);
    if ($stmt->rowCount() > 0) {
        die("Nome de usuário já existe.");
    }

    // Inserir o novo usuário
    $stmt = $pdo->prepare("INSERT INTO usuarios (usuario, funcao, senha) VALUES (?, ?, ?)");
    if ($stmt->execute([$usuario, $funcao, $senha])) {
        echo "Cadastro bem-sucedido!";
    } else {
        echo "Erro ao cadastrar.";
    }
}
?>