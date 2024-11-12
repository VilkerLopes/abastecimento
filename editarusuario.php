<?php

include 'config.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
if (isset($_POST['id']) && isset($_POST['usuario']) && isset($_POST['funcao']) && isset($_POST['senha'])) {
    $id = intval($_POST['id']);
    $usuario = $_POST['usuario']; 
    $funcao = $_POST['funcao']; 
    $senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);

    $stmt = $conexao->prepare("UPDATE usuarios SET usuario = ?, funcao = ?, senha = ? WHERE id = ?");
    $stmt->bind_param("sssi", $usuario, $funcao, $senha, $id);

    if ($stmt->execute()) {
        echo "Registro atualizado com sucesso.";
    } else {
        echo "Erro ao atualizar o registro: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Dados insuficientes fornecidos.";
}
}
$conexao->close();
?>

?>