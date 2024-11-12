<?php

include 'config.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
if (isset($_POST['id'])) {
    $id = intval($_POST['id']); 

   
    $stmt = $conexao->prepare("DELETE FROM veiculos WHERE id = ?");
    $stmt->bind_param("i", $id);

    
    if ($stmt->execute()) {
        echo "Registro excluído com sucesso.";
    } else {
        echo "Erro ao excluir o registro: " . $stmt->error;
    }

    
    $stmt->close();
} else {
    echo "ID não fornecido.";
}
}

$conexao->close();
?>