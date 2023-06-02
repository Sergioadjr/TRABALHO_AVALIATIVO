function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
        return false;
    }

    var sum = 0;
    var remainder;

    for (var i = 1; i <= 9; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(9, 10))) {
        return false;
    }

    sum = 0;

    for (i = 1; i <= 10; i++) {
        sum = sum + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }

    remainder = (sum * 10) % 11;

    if (remainder === 10 || remainder === 11) {
        remainder = 0;
    }

    if (remainder !== parseInt(cpf.substring(10, 11))) {
        return false;
    }

    return true;
}

function verificarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    var cpf = document.getElementById("cpf").value;
    var senha = document.getElementById("senha").value;
    var confirmacaoSenha = document.getElementById("confirmacaoSenha").value;

    if (!validarCPF(cpf)) {
        alert("CPF inválido!");
        return;
    }

    if (senha !== confirmacaoSenha) {
        alert("A senha e a confirmação de senha não correspondem!");
        return;
    }

    alert("Cadastro realizado com sucesso!");


    document.getElementById("nome").value = "";
    document.getElementById("cpf").value = "";
    document.getElementById("dataNascimento").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("confEmail").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("confirmacaoSenha").value = "";
}
