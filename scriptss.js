document.addEventListener('DOMContentLoaded', function () {
    // Coordenadas fictícias de produtores rurais em Pinhal de São Bento, PR
    var produtoresRurais = [
        { nome: 'Fazenda São José', latitude: -25.980, longitude: -53.551 },
        { nome: 'Sítio Boa Esperança', latitude: -25.974, longitude: -53.543 },
        { nome: 'Chácara Vista Verde', latitude: -25.967, longitude: -53.558 },
        { nome: 'Haras do Sol', latitude: -25.972, longitude: -53.535 },
        { nome: 'Granja São Paulo', latitude: -25.960, longitude: -53.559 },
        { nome: 'Fazenda Boa Vista', latitude: -25.985, longitude: -53.565 }
    ];

    // Inicialização do mapa
    var map = L.map('map').setView([-25.975, -53.55], 13);

    // Carregando mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
    }).addTo(map);

    // Adicionando marcadores dos produtores rurais
    produtoresRurais.forEach(function(produtor) {
        L.marker([produtor.latitude, produtor.longitude]).addTo(map)
            .bindPopup(produtor.nome);
    });
});