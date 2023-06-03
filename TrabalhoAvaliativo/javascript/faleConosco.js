function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;


    console.log('Nome: ' + name);
    console.log('Email: ' + email);
    console.log('Mensagem: ' + mensagem);

    alert("Mensagem enviada com sucesso!");


    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('mensagem').value = '';
}