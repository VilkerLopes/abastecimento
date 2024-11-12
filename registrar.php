<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Capturando os dados do formulário
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

    // Preparando a consulta SQL
    $sql = "INSERT INTO abastecimento (totalabastecido, kilometrageminicial, kilometragemfinal, tipocombustivel, posto, totalgasto, veiculo, cidadepartida, cidadeatual, dia, mes, ano, motorista, passageiro, comentario) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conexao->prepare($sql);

    // Verificando se a preparação da consulta foi bem-sucedida
    if ($stmt === false) {
        die("Erro na preparação: " . $conexao->error);
    }

    // Ligando os parâmetros
    $stmt->bind_param("sssssssssiiisss", $totalabastecido, $kilometrageminicial, $kilometragemfinal, $tipocombustivel, $posto, $totalgasto, $veiculo, $cidadepartida, $cidadeatual, $dia, $mes, $ano, $motorista, $passageiro, $comentario);

    // Executando a consulta
    if ($stmt->execute()) {
        echo "Registrado com sucesso!";
    } else {
        echo "Erro: " . $stmt->error;
    }

    // Fechando a declaração e a conexão
    $stmt->close();
    $conexao->close();
}
?>

