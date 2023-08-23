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

document.addEventListener("DOMContentLoaded", function () {
    const navbarPlaceholder = document.getElementById("navbar-placeholder");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "navbar.html", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            navbarPlaceholder.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});

function redirectToPage(url) {
    location.href = "https://" + url;
  }