function loadPage(pageName) {
    const contentDiv = document.getElementById("content");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", pageName, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contentDiv.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

// Use a flag to track if the navbar has been loaded
let navbarLoaded = false;

document.addEventListener("DOMContentLoaded", function () {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");

    if (!navbarLoaded && navbarPlaceholder) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "navbar.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                navbarPlaceholder.innerHTML = xhr.responseText;
                navbarLoaded = true; // Set the flag to true
            }
        };
        xhr.send();
    } else {
        console.error("Navbar placeholder element not found.");
    }
});
