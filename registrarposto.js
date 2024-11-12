document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('minimized');
    });
});

//consultar 

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('consulta').addEventListener('click', function() {
        fetch('consultaposto.php', {
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
                    li.textContent = `Nome: ${record.nome}`;;
                    li.dataset.id = record.id;
                    li.dataset.nome = record.nome;
                    li.dataset.localizacao = record.localizacao;
                    ul.appendChild(li);
                });
                resultContainer.appendChild(ul);

                ul.querySelectorAll('li').forEach(item => {
                    item.addEventListener('click', function() {
                        document.getElementById('novoid').value = this.dataset.id;
                        document.getElementById('novonome').value = this.dataset.nome;
                        document.getElementById('novolocalizacao').value = this.dataset.localizacao;
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
    var form = document.getElementById('editaposto');
    form.reset();
});

