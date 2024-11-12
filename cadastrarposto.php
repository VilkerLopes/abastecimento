<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $localizacao = $_POST['localizacao'];

    $sql = "INSERT INTO posto (nome, localizacao) VALUES (?, ?)";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("ss", $nome, $localizacao);

    if ($stmt->execute()) {
        echo "Novo posto criado com sucesso!";
    } else {
        echo "Erro: " . $stmt->error;
    }

    $stmt->close();
    $conexao->close();
}
?>