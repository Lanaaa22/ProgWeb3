function autenticar() {
   //capturando a senha e o user
   var user = document.getElementById('user');
   let senha = document.getElementById('senha');
   //contando os valores da senha e do user
   let s = senha.value.length;
   let u = user.value.length;
   //caso a senha estiver errada
   if (s == 0) {
       senha.style.borderColor = 'red';
       document.getElementById('para').innerHTML = 'Senha deve ter entre 6 a 30 caracteres'
   }


    else {
       senha.style.borderColor = 'green';
       

   }

   if (u == 0) {
       user.style.borderColor = 'red';
       document.getElementById('para2').innerHTML = 'Usuário deve ser preenchido'


   } else {
       user.style.borderColor = 'green';
       document.getElementById('para2').style.display =  'none'

   }

   //uma senha entre 6 a 30 caracteres
   if (s > 6 && s < 30) {
       senha.style.borderColor = 'green';
       document.getElementById('para').style.display =  'none'

   } else {
       senha.style.borderColor = 'red';

       document.getElementById('para').innerHTML = 'Senha deve ter entre 6 a 30 caracteres'
   }

}

//-------------------------------------------------------------//

var btn = document.getElementById('dropbut')
btn.addEventListener("click", function(){
   let menu = document.getElementById('menu').classList.toggle("show");
   let m = document.getElementById('menu')
   if (menu == true) {
      m.style.display = 'block'
   }
   else {
      m.style.display = 'none'
   }


})