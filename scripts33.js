// script33.js
let pontos = 0;

function triggerUpload() {
    document.getElementById('upload').click();
}

function fileSelected() {
    // No need to preview the image; simply note that a file was selected
    console.log('Arquivo selecionado.');
}

function uploadPhoto() {
    const uploadInput = document.getElementById('upload');

    if (uploadInput.files.length > 0) {
        pontos += 1;
        document.getElementById('pontos').innerText = pontos;

        if (pontos >= 10) {
            document.getElementById('cupom').style.display = 'block';
            showConfetti('Parabéns! Você ganhou um cupom de desconto!');
        } else {
            showConfetti('Parabéns! Você ganhou um ponto!');
        }

        // Limpar o input após o envio
        uploadInput.value = "";
    } else {
        alert('Por favor, selecione uma foto para enviar.');
    }
}

function showConfetti(message) {
    const confettiContainer = document.getElementById('confetti');
    confettiContainer.innerHTML = ''; // Limpar confetes antigos

    for (let i = 0; i < 100; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.className = 'confetti-piece';
        confettiPiece.style.left = Math.random() * 100 + 'vw';
        confettiPiece.style.backgroundColor = randomColor();
        confettiPiece.style.animationDuration = (Math.random() * 2 + 3) + 's';
        confettiContainer.appendChild(confettiPiece);
    }

    const confettiMessage = document.createElement('div');
    confettiMessage.id = 'confetti-message';
    confettiMessage.innerText = message;
    confettiContainer.appendChild(confettiMessage);

    confettiContainer.classList.remove('hidden');

    setTimeout(() => {
        confettiContainer.classList.add('hidden');
    }, 3000); // Confetes duram 3 segundos
}

function randomColor() {
    const colors = ['#ff0', '#f00', '#0f0', '#00f', '#ff6f61'];
    return colors[Math.floor(Math.random() * colors.length)];
}