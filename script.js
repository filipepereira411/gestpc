document.addEventListener('DOMContentLoaded', () => {
    const botao = document.getElementById('meuBotao');
    const mensagem = document.getElementById('mensagem');

    botao.addEventListener('click', () => {
        mensagem.textContent = 'Olá! O JavaScript está a funcionar localmente! 🎉';
    });
});
