// Asegúrate de que el mapa se inicialice después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', function() {
    const map = L.map('map').setView([19.4326, -99.1332], 12); // Centrar el mapa en CDMX

    // Cargar las capas de OpenStreetMap para mostrar el mapa base
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Definir las colonias con sus coordenadas
    const colonias = [
        { name: "Centro Histórico", coords: [19.4263, -99.1266] },
        { name: "Colonia Morelos", coords: [19.4416, -99.1237] },
        { name: "Colonia San Rafael", coords: [19.4414, -99.1589] },
        { name: "Colonia Tabacalera", coords: [19.4373, -99.1527] },
        { name: "Colonia Del Parque", coords: [19.4700, -99.1400] },
        { name: "Colonia Penitenciaria", coords: [19.4786, -99.1167] },
        { name: "Candelaria de los Patos Fovissste", coords: [19.4206, -99.1223] }
    ];

    // Añadir marcadores para cada colonia
    colonias.forEach((colonia, index) => {
        const marker = L.marker(colonia.coords).addTo(map)
            .bindPopup(`<b>${colonia.name}</b>`)
            .on('click', function() {
                marker.openPopup();
            });

        // Añadir animación de resaltar con un retraso
        setTimeout(() => {
            marker.setIcon(new L.Icon.Default()).setOpacity(1);
        }, 1000 * (index + 1));
    });
});