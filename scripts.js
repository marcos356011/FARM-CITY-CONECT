document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    let currentIndex = 0;

    // Função para trocar para o próximo slide
    function nextSlide() {
        images[currentIndex].style.display = 'none'; // Oculta o slide atual
        currentIndex = (currentIndex + 1) % images.length; // Calcula o próximo índice de slide
        images[currentIndex].style.display = 'block'; // Mostra o próximo slide
    }

    // Define um intervalo para trocar os slides automaticamente a cada 3 segundos (3000 milissegundos)
    setInterval(nextSlide, 3000);
});

document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const slides = document.querySelector('.slides');
    const images = slides.querySelectorAll('img');
    let currentIndex = 0;

    // Função para trocar para o próximo slide
    function nextSlide() {
        images[currentIndex].style.display = 'none'; // Oculta o slide atual
        currentIndex = (currentIndex + 1) % images.length; // Calcula o próximo índice de slide
        images[currentIndex].style.display = 'block'; // Mostra o próximo slide
    }

    // Define um intervalo para trocar os slides automaticamente a cada 3 segundos (3000 milissegundos)
    setInterval(nextSlide, 3000);

    // Menu Hambúrguer Toggle
    menuToggle.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    // Fechar o menu ao clicar em um link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    });
});