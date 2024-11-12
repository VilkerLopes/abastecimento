<?php

include 'config.php';

$id = isset($_GET['id']) ? intval($_GET['id']) : null;

if ($id !== null) {
    $stmt = $conexao->prepare("SELECT * FROM posto WHERE id = ?");
    $stmt->bind_param("i", $id);
} else {
    $stmt = $conexao->prepare("SELECT * FROM posto");
}

$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $data = [];
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode([]);
}

$stmt->close();

$conexao->close();

?>