<?php

include 'config.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
if (isset($_POST['id']) && isset($_POST['placa']) && isset($_POST['modelo'])) {
    $id = intval($_POST['id']);
    $placa = $_POST['placa']; 
    $modelo = $_POST['modelo']; 

    $stmt = $conexao->prepare("UPDATE veiculos SET placa = ?, modelo = ? WHERE id = ?");
    $stmt->bind_param("ssi", $placa, $modelo, $id);

    if ($stmt->execute()) {
        echo "Registro atualizado com sucesso.";
    } 
    
    else {
        echo "Erro ao atualizar o registro: " . $stmt->error;
    }

    $stmt->close();
} 

else {
    echo "Dados insuficientes fornecidos.";
}
}
$conexao->close();
?>
