<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $usuario = $_POST['usuario'];
    $funcao = $_POST['funcao'];
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO usuarios (usuario, funcao, senha) VALUES (?, ?, ?)";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("sss", $usuario, $funcao, $senha);

    if ($stmt->execute()) {
        echo "Novo registro criado com sucesso!";
    } else {
        echo "Erro: " . $stmt->error;
    }
}
    $stmt->close();
    $conexao->close();
?>
