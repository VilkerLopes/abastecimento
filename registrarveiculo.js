document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('minimized');
    });
});


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('consulta').addEventListener('click', function() {
        fetch('consultaveiculo.php', {
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
                    li.textContent = `Placa: ${record.placa}`;
                    li.dataset.id = record.id;
                    li.dataset.modelo = record.modelo;
                    li.dataset.placa = record.placa;
                    ul.appendChild(li);
                });
                resultContainer.appendChild(ul);

                ul.querySelectorAll('li').forEach(item => {
                    item.addEventListener('click', function() {
                        document.getElementById('novoid').value = this.dataset.id;
                        document.getElementById('novomodelo').value = this.dataset.modelo;
                        document.getElementById('novoplaca').value = this.dataset.placa;
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
    var form = document.getElementById('editaform');
    form.reset();
});

