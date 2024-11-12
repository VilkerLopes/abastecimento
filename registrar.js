document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggle-btn');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', function() {
        sidebar.classList.toggle('minimized');
    });
});


document.getElementById('abastecimentoform').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('registrar.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); 
    
        this.reset();
    
    })



    .catch(error => {
        console.error('Erro:', error);
    });
});