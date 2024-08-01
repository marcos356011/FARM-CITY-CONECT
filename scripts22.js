// Função para enviar o formulário
document.getElementById('form-finalizacao').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Mostra a mensagem de parabéns, confetes e balões
    document.getElementById('parabens').style.display = 'block';
    document.getElementById('confetes').style.display = 'block';
    document.getElementById('baloes').style.display = 'block';

    // Limpa o formulário (opcional)
    this.reset();

    // Opcional: role para cima para exibir a mensagem
    window.scrollTo({ top: 0, behavior: 'smooth' });
});