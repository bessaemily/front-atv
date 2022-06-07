$(document).ready(function() {
    $('.menu-toggle').on('click', function (){
        $('.nav').toggleClass('showing');
        $('.nav ul').toggleClass('showing');

    });

    // Validar campo email
    function validarEmail(email) 
    {
        var validador = /\S+@\S+\.\S+/;
        return validador.test(email);
    }

    var form = document.querySelector('form');
    form.addEventListener('submit', function (event) 
    {
        event.preventDefault();
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value; 
        var sexo = document.querySelector('input[name="sexo"]:checked');
        var texto = document.getElementById('texto').value;

        // Validar campos obrigatórios, nome, email, sexo, motivo do contato e área de texto
        if (nome == '' || email == '' || texto == '' || !sexo) 
        {
            alert('Preencha todos os campos obrigatórios');
        } else if (!validarEmail(email)) 
        {
            alert('E-mail inválido');
        } if (telefone) 
        {
            if (telefone.length < 10) 
            {
                alert('Telefone inválido');
            }
        } else 
        {
            alert('Formulário enviado com sucesso');
        }
    });
});
