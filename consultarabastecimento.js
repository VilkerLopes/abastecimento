document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('minimized');
    });
});

// consultar

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('consulta').addEventListener('click', function() {
        fetch('consultaregistro.php', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json()) 
        .then(data => {
            const resultContainer = document.getElementById('resultado');
            resultContainer.innerHTML = ''; 

            if (data.length === 0) {
                resultContainer.innerHTML = 'Nenhum dado encontrado.';
            } else {
                const ul = document.createElement('ul');
                data.forEach(record => {
                    const li = document.createElement('li');
                    li.textContent = `Veículo: ${record.veiculo}, Posto: ${record.posto}`;
                    li.dataset.id = record.id;
                    li.dataset.veiculo = record.veiculo;
                    li.dataset.totalgasto = record.totalgasto;
                    li.dataset.posto = record.posto;
                    li.dataset.totalabastecido = record.totalabastecido;
                    li.dataset.kilometrageminicial = record.kilometrageminicial;
                    li.dataset.kilometragemfinal = record.kilometragemfinal;
                    li.dataset.tipocombustivel =record.tipocombustivel;
                    li.dataset.cidadepartida = record.cidadepartida;
                    li.dataset.cidadeatual = record.cidadeatual;
                    li.dataset.dia = record.dia;
                    li.dataset.mes = record.mes;
                    li.dataset.ano = record.ano;
                    li.dataset.motorista = record.motorista;
                    li.dataset.passageiro = record.passageiro;
                    li.dataset.comentario = record.comentario;

                    ul.appendChild(li);
                });
                resultContainer.appendChild(ul);

                ul.querySelectorAll('li').forEach(item => {
                    item.addEventListener('click', function() {
                        document.getElementById('id').value = this.dataset.id;
                        document.getElementById('totalabastecido').value = this.dataset.totalabastecido;
                        document.getElementById('tipocombustivel').value = this.dataset.tipocombustivel;
                        document.getElementById('totalgasto').value = this.dataset.totalgasto;
                        document.getElementById('cidadepartida').value = this.dataset.cidadepartida;
                        document.getElementById('kilometrageminicial').value = this.dataset.kilometrageminicial;
                        document.getElementById('kilometragemfinal').value = this.dataset.kilometragemfinal;
                        document.getElementById('posto').value = this.dataset.posto;
                        document.getElementById('veiculo').value = this.dataset.veiculo;
                        document.getElementById('cidadeatual').value = this.dataset.cidadeatual;
                        document.getElementById('dia').value = this.dataset.dia;
                        document.getElementById('mes').value = this.dataset.mes;
                        document.getElementById('ano').value = this.dataset.ano;
                        document.getElementById('motorista').value = this.dataset.motorista;
                        document.getElementById('passageiro').value = this.dataset.passageiro;
                        document.getElementById('comentario').value = this.dataset.comentario;


                    });
                });
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('resultado').innerHTML = 'Erro ao consultar dados.';
        });
    });
});

//limpar

document.getElementById('limpar').addEventListener('click', function() {
    var form = document.getElementById('abastecimentoform');
    form.reset();
});

//apaga o registro
document.getElementById('excluir').addEventListener('click', function() {
    const valor = document.getElementById(identificador).value;
    fetch('excluirregistro.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'id' + encodeURIComponent(valor)
    })
    .then(response => response.text())
    .then(data => {
        console.log(data); // Exibe a resposta do servidor
    })
    .catch(error => {
        console.error('Erro:', error);
    });
    
    var form = document.getElementById('');
    form.reset();
});

