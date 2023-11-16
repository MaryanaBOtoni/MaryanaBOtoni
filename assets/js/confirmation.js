// função que faz o download do JSON //
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

    // cria os elementos //
    const nameP = document.createElement('p');
    nameP.classList.add('p-margin');
    nameP.classList.add('p');

    const lastnameP = document.createElement('p');
    lastnameP.classList.add('p');
    const ageP = document.createElement('p');
    ageP.classList.add('p');

    const emailP = document.createElement('p');
    emailP.classList.add('p');

    const passwordP = document.createElement('p');
    passwordP.classList.add('p');

    // atribui dados aos elementos //
    nameP.innerText = `Nome de usuário: ${username}`;
    lastnameP.innerText = `Sobrenome do usuário: ${lastname}`;
    ageP.innerText = `Idade: ${age}`;
    emailP.innerText = `Email: ${email}`;
    passwordP.innerText = `Senha: ${password}`;

    // coloca os atributos no html //
    dataField.appendChild(nameP);
    dataField.appendChild(lastnameP);
    dataField.appendChild(ageP);
    dataField.appendChild(emailP);
    dataField.appendChild(passwordP);
}

function downloadObjectAsJson(exportObj) {
    const downloadBtn = document.createElement('a');
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    downloadBtn.innerText = "Download json";
    downloadBtn.setAttribute("href", dataStr);
    downloadBtn.setAttribute("download", "data.json.js");
    downloadBtn.click();
}

// salva o item no localStorage //
const json = localStorage.getItem('form');

// chama a função ShowData após obter os dados do localStorage
ShowData();

// faz o download do arquivo
downloadObjectAsJson(json);
