// função que faz o dowload do JSON //

function ShowData() {
    const dataField = document.querySelector("#dataField");

    // pega os dados

    const data = localStorage.getItem('form');

    const json = JSON.parse(data);

    const username = json.username;
    const lastname = json.lastname;
    const age = json.age;
    const email = json.email;
    const password = json.password;

    // cria os elementos
    const nameP = document.createElement('p');
    nameP.classList.add('p-margin')
    nameP.classList.add('p')
    const lastnameP = document.createElement('p');
    lastnameP.classList.add('p')
    const ageP = document.createElement('p');
    ageP.classList.add('p')

    const emailP = document.createElement('p');
    emailP.classList.add('p')

    const passwordP = document.createElement('p');
    passwordP.classList.add('p')


    // atribui dados aos elementos

    nameP.innerText = `Nome de usuário: ${username}`;
    lastnameP.innerText = `Sobrenome do usuário: ${lastname}`;
    ageP.innerText = `Idade: ${age}`;
    emailP.innerText = `Email: ${email}`;
    passwordP.innerText = `Senha: ${password}`;

    
    // coloca os atributos no html

    dataField.appendChild(nameP);
    dataField.appendChild(lastnameP);
    dataField.appendChild(ageP);
    dataField.appendChild(emailP);
}

function dowloadObjectAasJson(exportObj){
    const localTexto = document.querySelector('#data');
    const downloadBtn= document.createElement('a');
    let dataStar = "data:text/json;chaeser=utf-8," + encodeURIComponent(exportObj);
    downloadBtn.innerText = "Download json";
    downloadBtn.setAttribute("href", dataStar);
    downloadBtn.setAttribute("download", "meuArquivo.json");
    //localTexto.appendChild(downloadBtn); // firefox 
    downloadBtn.click();
}

// salva o item no localStorage //

const json = localStorage.getItem('form');

console.log(json)
// faz o download do arqivo//
dowloadObjectAasJson(json);

const obj = JSON.parse(json);

ShowData();

