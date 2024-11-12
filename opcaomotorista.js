document.addEventListener('DOMContentLoaded', function() {
    function carregarMotorista() {
        fetch('consultausuario.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())  // Converte a resposta para JSON
        .then(data => {
            const select = document.getElementById('motorista');
            select.innerHTML = '';  // Limpa as opções anteriores

            if (data.length === 0) {
                select.innerHTML = '<option>Nenhum dado encontrado.</option>';
            } else {
                select.innerHTML = '<option value="">Selecione um motorista</option>';  // Adiciona uma opção padrão
                data.forEach(usuarios => {
                    const option = document.createElement('option');
                    option.value = usuarios.usuario;
                    option.textContent = `${usuarios.usuario}`;
                    select.appendChild(option);  // Adiciona a nova opção
                });
            }
        })
        .catch(error => console.error('Erro ao carregar os dados dos usuarios:', error));  // Captura erros
    }

            // Chama a função para carregar os veículos ao carregar a página
    carregarMotorista();
});