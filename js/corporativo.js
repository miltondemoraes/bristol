// Abrir detalhes do projeto
const projetoCards = document.querySelectorAll(".projeto-card");

projetoCards.forEach(card => {
    card.addEventListener("click", () => {
        const projectId = card.getAttribute("data-projeto");
        const projectDetail = document.getElementById(projectId);
        
        if (projectDetail) {
            projectDetail.classList.add("active");
            document.body.style.overflow = "hidden"; // Previne scroll da página
        }
    });
});

// Fechar detalhes do projeto
function fecharDetalhes() {
    const allDetails = document.querySelectorAll(".projeto-detalhes.active");
    allDetails.forEach(detail => {
        detail.classList.remove("active");
    });
    document.body.style.overflow = "auto"; // Restaura scroll
}

// Fechar ao clicar fora do modal
document.addEventListener("click", (e) => {
    const detalheAberto = document.querySelector(".projeto-detalhes.active");
    
    if (detalheAberto && !detalheAberto.querySelector(".container").contains(e.target)) {
        if (!e.target.closest(".projeto-card")) {
            fecharDetalhes();
        }
    }
});

// Fechar com ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        fecharDetalhes();
    }
});
