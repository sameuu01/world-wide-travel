const formulario = document.getElementById("meuFormulario");
const telefone = document.getElementById("telefone");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const sexo = document.getElementById("sexo");

    // Validação
    if (nome.value.trim() === "") {
        alert("Preencha o nome.");
        return;
    }

    if (telefone.value.trim() === "") {
        alert("Preencha o telefone.");
        return;
    }

    // Limpar campos
    nome.value = "";
    telefone.value = "";

    alert("Formulário enviado!");
});

telefone.addEventListener("input", function() {
    this.value = this.value.replace(/\D/g, "");
});