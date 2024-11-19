function copiarEmail() {
    const email = "abilioalcantara2701@gmail.com";

    const tempInput = document.createElement("input");
    tempInput.value = email;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);

    alert("Email copiado: " + email);
}

function scrollToSection(sectionId) {
    const targetSection = document.getElementById(sectionId);

    if (targetSection) {
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

const voltar = document.getElementById("voltar");
voltar.addEventListener("click", function() {
    window.history.back();
})
