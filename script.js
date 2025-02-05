function createText() {
    const text = document.createElement('div');
    text.className = 'text';
    text.innerText = 'Vicky';
    document.body.appendChild(text);

    const startLeft = Math.random() * window.innerWidth;
    text.style.left = `${startLeft}px`;
    text.style.animationDuration = `${4 + Math.random() * 4}s`; // Duración más larga

    setTimeout(() => {
        text.remove();
    }, 10000); // Más tiempo antes de remover el texto
}

setInterval(createText, 200); // Intervalo más largo entre creaciones de texto
