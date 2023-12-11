
console.log("I have been imported")
document.addEventListener('click', function (event) {
    if (event.target.tagName === 'A' && event.target.classList.contains('nav-link')) {
        event.preventDefault();
        console.log("I am running")
        loadContent(event.target.href);
    }
});


function loadContent(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            
            document.getElementById('content-container').innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
}
