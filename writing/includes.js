function loadHTML(elementId, content) {
    const element = document.getElementById(elementId);
    if (element){
        console.log("found it!");
        element.innerHTML = content;
    }
}

const headContent = `
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="includes.js"></script>`;

const headerContent = `
    <div class="topbar">
        <a href="https://nesssch.github.io" class="tbl">Home</a>
        <a href="https://nesssch.github.io/writing/home" class="tbl">Writing</a>
    </div>`

// Load header and footer when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    loadHTML('header', headerContent); // Load header into #header
});