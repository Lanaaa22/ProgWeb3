function AbreBotaoal() {
    
    var c = document.getElementById('caixa');
    
    //div amarela
    c.style.borderRadius = '20px';
    c.style.border = 'solid';
    c.style.borderColor = 'yellow'
    c.style.width = '650px';
    c.style.height = '400px';
    c.style.backgroundColor = '#FCFEF3';
    c.style.margin = '400px';
    c.style.position = 'relative';
    c.style.bottom = '360px';
    c.style.display = 'block';
    
    //criando botão
    var caluno = document.createElement("input");  
    caluno.type = 'button';  
    caluno.value = 'Criar Aluno'; 
    caluno.onclick = function Criar() {
        //entrada de dados
        var nome = window.prompt("Digite o nome do aluno: ");
        const node = document.createElement('p')
        const text = document.createTextNode(`Aluno ${nome}`)
        node.appendChild(text)
        document.getElementById("caixa").appendChild(node)



       
        //css do nome do aluno
        node.style.backgroundColor = '#0baadb';
        node.style.border = 'solid';
        node.style.width = '325px';
        node.style.borderColor = '#0066A2';
        node.style.borderRadius = '10px';
        node.style.textAlign = 'center';
        node.style.marginLeft = '15px'
     

    
     
    };
    document.body.appendChild(caluno);

    //css do botão criar aluno
    caluno.style.background = '#0baadb';
	caluno.style.color = 'white';
	caluno.style.borderStyle = 'solid';
	caluno.style.borderColor = '#0066A2';
	caluno.style.height = '50px';
	caluno.style.width ='200px';
	caluno.style.font = 'bold15px arial,sans-serif';
    caluno.style.borderRadius = '10px';
    caluno.style.position = 'relative';
    caluno.style.bottom = '1110px';
    caluno.style.left = '805px';
   
}

function AbreBotaoprof() {
    var c = document.getElementById('caixa_pro');
    c.style.borderRadius = '20px';
    c.style.border = 'solid';
    c.style.borderColor = 'yellow'
    c.style.width = '650px';
    c.style.height = '400px';
    c.style.backgroundColor = '#FCFEF3';
    c.style.margin = '400px';
    c.style.position = 'relative';
    c.style.bottom = '360px';
    c.style.right = '30px';


    var cprofessor = document.createElement('input');
    cprofessor.type = 'button';
    cprofessor.value = 'Criar Professor';
    cprofessor.onclick = function Criarprof() {
        var nome = window.prompt("Digite o nome do Professor: ");
        const node = document.createElement('p')
        const text = document.createTextNode(`Professor ${nome}`)
        node.appendChild(text)
        document.getElementById("caixa_pro").appendChild(node)


       
        node.style.backgroundColor = '#0baadb';
        node.style.border = 'solid';
        node.style.width = '325px';
        node.style.borderColor = '#0066A2';
        node.style.borderRadius = '10px';
        node.style.textAlign = 'center';
        node.style.marginLeft = '15px'
     
    

    };
    document.body.appendChild(cprofessor);
    
    //css do botão criar professor
    cprofessor.style.background = '#0baadb';
	cprofessor.style.color = 'white';
	cprofessor.style.borderStyle = 'solid';
	cprofessor.style.borderColor = '#0066A2';
	cprofessor.style.height = '50px';
	cprofessor.style.width ='200px';
	cprofessor.style.font = 'bold15px arial,sans-serif';
    cprofessor.style.borderRadius = '10px';
    cprofessor.style.position = 'relative';
    cprofessor.style.bottom = '1110px';
    cprofessor.style.left = '805px';
    
}

