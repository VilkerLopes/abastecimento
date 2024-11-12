document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('minimized');
    });
});

//consultar

document.addEventListener('DOMContentLoaded', function() {
    const resultContainer = document.getElementById('resultadousuario');
    const form = document.getElementById('formulario'); 

    document.getElementById('consultausuario').addEventListener('click', function() {
        fetch('consultausuario.php', {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao consultar dados');
            }
            return response.json();
        })
        .then(data => {
            console.log('Dados recebidos:', data); 

            resultContainer.innerHTML = ''; 

            if (data.length === 0) {
                resultContainer.innerHTML = 'Nenhum dado encontrado.';
            } 
            else {
                var id = document.getElementById('novoid');
                var usuario = document.getElementById('usuario');
                var senha = document.getElementById('novosenha');
                var funcao = document.getElementById('novofuncao');

                const ul = document.createElement('ul');
                data.forEach(record => {
                    const li = document.createElement('li');
                    li.textContent = `Usuário: ${record.usuario}`;
                    li.dataset.id = record.id;
                    li.dataset.usuario = record.usuario;
                    li.dataset.funcao = record.funcao;
                    li.dataset.senha = record.senha;
                    ul.appendChild(li);
                });
                resultContainer.appendChild(ul);

                ul.querySelectorAll('li').forEach(item => {
                    item.addEventListener('click', function() {
                        id.value = this.dataset.id;
                        usuario.value = this.dataset.usuario;
                        funcao.value = this.dataset.funcao;
                        senha.value = this.dataset.senha;
                    });
                });
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            resultContainer.innerHTML = 'Erro ao consultar dados.';
        });
    });
});
document.getElementById('limpar').addEventListener('click', function() {
    var form = document.getElementById('formulario');
    form.reset();
});
