// async function loadHTML(elementId, filePath) {
//     console.log("loading...")
//   try {
//     // Fetch the external HTML file
//     const response = await fetch(filePath);
    
//     // Check if the request was successful
//     if (!response.ok) {
//       throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
//     }
    
//     // Extract HTML text from the response
//     const html = await response.text();
    
//     // Insert the HTML into the target element
//     const element = document.getElementById(elementId);
//     if (element) {
//       element.innerHTML = html;
//     } else {
//       throw new Error(`Element with ID "${elementId}" not found`);
//     }
//   } catch (error) {
//     console.error('Error loading content:', error);
//     // Optional: Display a fallback message in the UI
//     // document.getElementById(elementId)?.innerHTML = `<p>Error loading content.</p>`;
//   }
// }

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
    loadHTML('head', headContent);
    loadHTML('header', headerContent); // Load header into #header
});