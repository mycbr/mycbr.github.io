document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    const loadSection = (section) => {
        fetch(`includes/${section}.html`)
            .then(res => res.text())
            .then(html => contentDiv.innerHTML = html)
            .catch(err => contentDiv.innerHTML = "<p>Section not found.</p>");
    };

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const section = link.getAttribute("data-section");
            loadSection(section);
        });
    });

    // Load default section
    loadSection("overview");
});
// Toggle nav menu on mobile
document.getElementById("menu-toggle").addEventListener("click", () => {
    document.getElementById("nav-links").classList.toggle("active");
});
