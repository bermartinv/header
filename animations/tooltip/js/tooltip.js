var anchors = document.querySelectorAll('.anchor-tooltip');
anchors.forEach(function(anchor){
    // obtenemos atribtuo titulo
    var tooltipText = anchor.getAttribute('title'),
    // creamos elemento span
        tooltip = document.createElement('span');
    // añadimos el class
    tooltip.className = 'title-tooltip';
    // añadimos el contenido del elemento
    tooltip.innerHTML = tooltipText;
    // añadimos este span al elemento
    anchor.appendChild(tooltip);
});