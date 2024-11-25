document.addEventListener('DOMContentLoaded', () => {
    const headerText = document.getElementById('header');
    const text = headerText.innerText;
    headerText.innerHTML = ''; // Clear the original text

    // Create a span for each letter and add to header
    [...text].forEach((letter, index) => {
        const span = document.createElement('span');
        span.innerText = letter;
        span.style.animationDelay = `${index * 0.1}s`; // Add a delay for wave effect
        headerText.appendChild(span);
    });
});
