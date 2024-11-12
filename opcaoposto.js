document.addEventListener('DOMContentLoaded', function() {
    function carregarposto() {
        fetch('consultaposto.php', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())  // Converte a resposta para JSON
        .then(data => {
            const select = document.getElementById('posto');
            select.innerHTML = '';  // Limpa as opções anteriores

            if (data.length === 0) {
                select.innerHTML = '<option>Nenhum dado encontrado.</option>';
            } else {
                select.innerHTML = '<option value="">Selecione um posto</option>';  // Adiciona uma opção padrão
                data.forEach(posto => {
                    const option = document.createElement('option');
                    option.value = posto.nome;
                    option.textContent = `${posto.nome}`;
                    select.appendChild(option);  // Adiciona a nova opção
                });
            }
        })
        .catch(error => console.error('Erro ao carregar os dados dos veículos:', error));  // Captura erros
    }

        // Chama a função para carregar os veículos ao carregar a página
    carregarposto();
});