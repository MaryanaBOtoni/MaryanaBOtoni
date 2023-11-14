const form = document.getElementById("form");
const username = document.getElementById("username");
const age = document.getElementById("age");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");
let usernameValid = false;
let ageValid = false;
let lastnameValid = false;
let emailValid = false;
let passwordValid = false;
let passwordConfirmationValid = false;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

// coloca mensagem de erro
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  // Adiciona a mensagem de erro
  small.innerText = message;

  // Adiciona a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  // Adicionar a classe de sucesso
  formControl.className = "form-control success";
}

//checa valores

function checkInputs() {
  const usernameValue = username.value;
  const emailValue = email.value;
  const lastnameValue = lastname.value;
  const ageValue = age.value;
  const passwordValue = password.value;
  const passwordConfirmationValue = passwordConfirmation.value;

/**nome */

  if (usernameValue === "") {
    setErrorFor(username, "O nome de usuário é obrigatório.");
  } else if (usernameValue.length < 3 || usernameValue.length > 50) {
    setErrorFor(username, "O nome precisa ter no mínimo 3 caracteres e no máximo 50.");
  
} else {
    setSuccessFor(username);
    usernameValid = true;
  }
/*end nome*/

//**Sobrenome*/

if (lastnameValue === "") {
    setErrorFor(lastname, "O nome de usuário é obrigatório.");
  } else if (lastnameValue.length < 3 || lastnameValue.length > 50) {
    setErrorFor(lastname, "O nome precisa ter no mínimo 3 caracteres e no máximo 50.");
  
} else {
    setSuccessFor(lastname);
    lastnameValid = true;

  }



//*end sobrenome*//



  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
    emailValid = true;
  }

//*Idade/
 if (ageValue === "") {
    setErrorFor(age, "A idade é obrigatória.");
  } else if (ageValue.length > 100) {
    setErrorFor(age, "A idade precisa ser até 100 .");
  } else {
    setSuccessFor(age);
  }
  
/*end idade*/

/*email*/
  if (emailValue === "") {
    setErrorFor(email, "O email é obrigatório.");
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email, "Por favor, insira um email válido.");
  } else {
    setSuccessFor(email);
    ageValid = true;
  }
  /*email*/

/*senha*/
  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 8) {
    setErrorFor(password, "A senha precisa ter no mínimo 8 caracteres.");
  } else {
    setSuccessFor(password);
    passwordValid = true;
  }

  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
    passwordConfirmationValid = true;
  }

/*senha*/

  const formControls = form.querySelectorAll(".form-control");

  const formIsValid = [...formControls].every((formControl) => {
    return formControl.className === "form-control success";
  });

  if (formIsValid) {

    console.log("O formulário está 100% válido!");
    sendForm();

  }

}


// faz checagem de email
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Submete o form, se válido //

function sendForm() {
  if (usernameValid &&
    ageValid &&
    lastnameValid &&
    emailValid &&
    passwordValid &&
    passwordConfirmationValid ){
    
    const fd = new FormData(form);

    console.log(fd);
    const obj = Object.fromEntries(fd);

    const json = JSON.stringify(obj);

    //console JSON : //
    localStorage.setItem("form", json);


    console.log(localStorage);
    
    // ADD envio do form : //
    window.location.href = "./confirmation.html";
    }
}


  function scrollToContent() {
    let element = document.getElementById("conteudo");
    element.scrollIntoView({ behavior: "smooth" });
}