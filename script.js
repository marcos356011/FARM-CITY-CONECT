// Função para alternar visibilidade do menu hambúrguer e tecla voltar
function toggleMenu() {
    var menu = document.getElementById("menu");
    var backBtn = document.getElementById("back-btn");
    
    if (menu.style.display === "flex") {
        menu.style.display = "none";
        backBtn.style.display = "none";
    } else {
        menu.style.display = "flex";
        backBtn.style.display = "inline";
    }
}