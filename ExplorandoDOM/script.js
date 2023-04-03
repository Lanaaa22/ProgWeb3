function autenticar() {
    var user = document.getElementById('user');
    let senha = document.getElementById('senha');
    let s = senha.value.length;
    let u = user.value.length;
    if (s == 0) {
        senha.style.borderColor = 'red';


    } else {
        senha.style.borderColor = 'green';

    }

    if (u == 0) {
        user.style.borderColor = 'red';


    } else {
        user.style.borderColor = 'green';

    }

    //uma senha entre 6 a 30 caracteres
    if (s > 6 && s < 30) {
        senha.style.borderColor = 'green';

    } else {
        senha.style.borderColor = 'red';

        document.getElementById('para').innerHTML = 'Senha deve ter entre 6 a 30 caracteres'
    }

}