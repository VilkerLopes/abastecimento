<?php

include 'config.php';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
if (isset($_POST['id']) && isset($_POST['totalabastecido']) && isset($_POST['kilometrageminicial']) && isset($_POST['kilometragemfinal']) && isset($_POST['tipocombustivel']) && isset($_POST['posto']) && isset($_POST['totalgasto']) && isset($_POST['veiculo']) && isset($_POST['cidadepartida']) && isset($_POST['cidadeatual']) && isset($_POST['dia']) && isset($_POST['mes']) && isset($_POST['ano']) && isset($_POST['motorista']) && isset($_POST['passageiro']) && isset($_POST['comentario'])) {
    $id = intval($_POST['id']);
    $totalabastecido = $_POST['totalabastecido']; 
    $kilometrageminicial = $_POST['kilometrageminicial']; 
    $kilometragemfinal = $_POST['kilometragemfinal']; 
    $tipocombustivel = $_POST['tipocombustivel'];
    $posto = $_POST['posto'];
    $totalgasto = $_POST['totalgasto'];
    $veiculo = $_POST['veiculo'];
    $cidadepartida = $_POST['cidadepartida'];
    $cidadeatual = $_POST['cidadeatual'];
    $dia = $_POST['dia'];
    $mes = $_POST['mes'];
    $ano = $_POST['ano'];
    $motorista = $_POST['motorista'];
    $passageiro = $_POST['passageiro'];
    $comentario = $_POST['comentario'];


    $stmt = $conexao->prepare("UPDATE abastecimento SET totalabastecido = ?, kilometragem = ?, tipocombustivel = ?, posto = ?, totalgasto = ?, veiculo = ?, cidadepartida = ?, cidadeatual = ?, dia = ?, mes = ?, ano = ?, motorista = ?, passageiro = ?, comentario = ? WHERE id = ?");
    $stmt->bind_param("ssssssssiiisssi", $totalabastecido, $kilometragem, $tipocombustivel, $posto, $totalgasto, $veiculo, $cidadepartida, $cidadeatual, $dia, $mes, $ano, $motorista, $passageiro, $comentario, $id);

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