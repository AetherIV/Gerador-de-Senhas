function generatePassword() {
    const passLength = document.getElementById("passLength").value;
    const numAllowed = document.getElementById("numAllowed").checked;
    const symbAllowed = document.getElementById("symbAllowed").checked;
    const lowerAllowed = document.getElementById("lowerAllowed").checked;
    const upperAllowed = document.getElementById("upperAllowed").checked;
    const generatedPassword = document.getElementById("generatedPassword");

    const lowercaseChars = "abcdefghigklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()+-=_";

    let passwordLength = parseInt(passLength);
    if (isNaN(passwordLength) || passwordLength <= 0) {
        alert("Favor digitar um número válido.");
        return;
    }

    let allowedChars = "";
    if (lowerAllowed) allowedChars += lowercaseChars;
    if (upperAllowed) allowedChars += uppercaseChars;
    if (numAllowed) allowedChars += numberChars;
    if (symbAllowed) allowedChars += symbolChars;

    if (allowedChars.length === 0) {
        alert("Incluir pelo menos 1 opção");
        return;
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    generatedPassword.textContent = password;
}

function copyText() {
    const copyText = document.getElementById("generatedPassword");

    if (copyText.textContent === "") {
        alert("Nenhum texto para copiar");
        return;
    }
    else{
        navigator.clipboard.writeText(copyText.textContent);
        alert("Texto copiado!");
    }
}

function clearPassword() {
    document.getElementById("passLength").value = "";
    document.getElementById("generatedPassword").textContent = "";
}
