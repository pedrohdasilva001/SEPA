function homescreen() {
    window.location.href = "HomeScreen.html";
}
function forget() {
    window.location.href = "Forget.html";
}   

    const botaotn1 = window.document.querySelector('input#tn1');
    const emailInput = window.document.querySelector('input#email');
    const passwordInput = window.document.querySelector('input#password');

function verificarInputs() { 
    
    const emailFilled = emailInput.value.trim() !== "";
    const passwordFilled = passwordInput.value.trim() !== "";

if (emailFilled && passwordFilled) {
    botaotn1.disabled = false;} else {botaotn1.disabled = true;
}}
emailInput.addEventListener('input', verificarInputs);
passwordInput.addEventListener('input', verificarInputs);

botaotn1.addEventListener('click', () => {
    if (!botaotn1.disabled) {
        homescreen();
    }
    })
    
   


 