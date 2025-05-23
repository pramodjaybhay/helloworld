document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const currentUrl = window.location.href;

    links.forEach(link => {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });

    // Placeholder for Diagram/Flowchart on alphaevolve.html
    // This is a simple way to indicate where the diagram should go.
    // It could be replaced by actual diagram embedding code or a more complex script.
    if (document.getElementById('how-it-works')) {
        const diagramSection = document.getElementById('how-it-works');
        const placeholder = diagramSection.querySelector('p:last-of-type'); // Assuming the placeholder text is the last p
        if (placeholder && placeholder.textContent.includes('[Placeholder for Diagram/Flowchart]')) {
            const diagramDiv = document.createElement('div');
            diagramDiv.className = 'placeholder-diagram';
            diagramDiv.textContent = 'Diagram/Flowchart illustrating the evolutionary framework will be displayed here.';
            // Replace the placeholder paragraph with the styled div
            // If you want to keep the paragraph and add the div, use insertBefore or appendChild accordingly
            placeholder.parentNode.replaceChild(diagramDiv, placeholder);
        }
    }
});
