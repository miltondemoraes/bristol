const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");
const menuLinks = document.querySelectorAll(".menu a");
const dropdown = document.querySelector(".dropdown");
const dropdownLink = dropdown ? dropdown.querySelector("a") : null;

// Toggle menu
hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
});

// Fechar menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        // Se for dropdown, não fechar o menu
        if (!link.closest(".dropdown")) {
            menu.classList.remove("active");
            hamburger.classList.remove("active");
        }
    });
});

// Dropdown no mobile
if (dropdownLink) {
    dropdownLink.addEventListener("click", (e) => {
        // Se for mobile, toggle o dropdown
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle("active");
        }
    });
}

// Fechar menu ao clicar fora
document.addEventListener("click", (e) => {
    if (!e.target.closest(".header")) {
        menu.classList.remove("active");
        hamburger.classList.remove("active");
        if (dropdown) {
            dropdown.classList.remove("active");
        }
    }
});

// Fechar dropdown ao redimensionar para desktop
window.addEventListener("resize", () => {
    if (window.innerWidth > 768 && dropdown) {
        dropdown.classList.remove("active");
    }
});
