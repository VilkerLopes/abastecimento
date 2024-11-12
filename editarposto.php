<?php

include 'config.php';

if (isset($_POST['id']) && isset($_POST['nome']) && isset($_POST['localizacao'])) {
    $id = intval($_POST['id']);
    $nome = $_POST['nome']; 
    $localizacao = $_POST['localizacao']; 

    $stmt = $conexao->prepare("UPDATE posto SET nome = ?, localizacao = ? WHERE id = ?");
    $stmt->bind_param("ssi", $nome, $localizacao, $id);

    if ($stmt->execute()) {
        echo "Registro atualizado com sucesso.";
    } else {
        echo "Erro ao atualizar o registro: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Dados insuficientes fornecidos.";
}

$conexao->close();
?>

?>