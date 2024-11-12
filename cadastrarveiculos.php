<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $placa = $_POST['placa'];
    $modelo = $_POST['modelo'];

    $sql = "INSERT INTO veiculos (placa, modelo) VALUES (?, ?)";
    $stmt = $conexao->prepare($sql);
    $stmt->bind_param("ss", $placa, $modelo);

    if ($stmt->execute()) {
        echo "Novo veiculo criado com sucesso!";
    } else {
        echo "Erro: " . $stmt->error;
    }

    $stmt->close();
    $conexao->close();
}
?>