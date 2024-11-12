CREATE DATABASE IF NOT EXISTS abastecimento;
USE abastecimento;

CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(500) NOT NULL,
    funcao VARCHAR(500) NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS veiculos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    placa VARCHAR(255) NOT NULL,
    modelo VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS posto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(500) NOT NULL,
    localizacao VARCHAR(500) NOT NULL
);

CREATE TABLE IF NOT EXISTS abastecimento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    totalabastecido VARCHAR(500) NOT NULL,
    kilometrageminicial VARCHAR(500) NOT NULL,
    kilometragemfinal VARCHAR(500) NOT NULL,
    tipocombustivel VARCHAR(255) NOT NULL,
    posto VARCHAR(500) NOT NULL,
    totalgasto VARCHAR(500) NOT NULL,
    veiculo VARCHAR(500) NOT NULL,
    cidadepartida VARCHAR(500) NOT NULL,
    cidadeatual VARCHAR(500) NOT NULL,
    dia INT(2) NOT NULL,
    mes INT(2) NOT NULL,
    ano INT(4) NOT NULL,
    motorista VARCHAR(500) NOT NULL,
    passageiro VARCHAR(500) NOT NULL,
    comentario VARCHAR(500) NOT NULL
);
