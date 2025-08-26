// Aguarda o carregamento completo do conteúdo da página antes de executar o script
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona todos os botões de aba e todos os painéis de conteúdo
    const tabs = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');
    const printButton = document.getElementById('printButton');

    // Adiciona um evento de clique a cada botão de aba
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;

            // Remove a classe 'active' de todos os botões e painéis
            tabs.forEach(item => item.classList.remove('active'));
            contents.forEach(item => item.classList.remove('active'));

            // Adiciona a classe 'active' ao botão clicado e ao painel de conteúdo correspondente
            tab.classList.add('active');
            document.getElementById(`tab-${tabName}`).classList.add('active');
        });
    });

    // Adiciona funcionalidade ao botão de impressão
    if (printButton) {
        printButton.addEventListener('click', () => {
            window.print();
        });
    }

});
