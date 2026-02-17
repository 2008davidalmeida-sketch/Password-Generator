
// Elements declaration
const lengthInput = document.getElementById('len-input');
const lengthText = document.getElementById('len-text');

const display1 = document.getElementById('password1');
const display2 = document.getElementById('password2');

const copyMessage = document.getElementById('copy-message');


// Global variables
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';


// Functions
lengthInput.addEventListener('input', () => {
     lengthText.textContent = `Password length: ${lengthInput.value}`;
});

function generatePasswords() {
    
    copyMessage.style.display = 'none';
    const passwordLength = lengthInput.value;
    
    let password1 = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password1 += characters[randomIndex];
    }

    let password2 = '';
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password2 += characters[randomIndex];
    }
    
    display1.textContent = password1;
    display2.textContent = password2;
}

display1.addEventListener('click', () => {
    navigator.clipboard.writeText(display1.textContent);
    copyMessage.style.display = 'block';
});

display2.addEventListener('click', () => {
    navigator.clipboard.writeText(display2.textContent);
    copyMessage.style.display = 'block';
});