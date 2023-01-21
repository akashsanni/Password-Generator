const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const passwordBox = document.querySelector('.password-box')
const firstPassword = document.querySelector('.first-password')
const secondPassword = document.querySelector('.second-password')
const generatePasswordBtn = document.querySelector('#generate-password-btn')
generatePasswordBtn.addEventListener('click',function(e){
    e.target.innerText = 'Generate Again!'
    passwordBox.style.visibility = 'visible'
    firstPassword.textContent=""
    secondPassword.textContent=""
    for(let i=0 ; i < 15 ; i++){
        let password1 = Math.floor(Math.random()*characters.length)
        firstPassword.textContent += characters[password1];
    }
    
    for(let i=0 ; i < 15 ; i++){
        let password2 = Math.floor(Math.random()*characters.length);
        secondPassword.textContent += characters[password2];
    }

})

//for alpha-numeric-password
const alphaNumeric = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const alphaNumericPassword = document.querySelector('#alpha-numeric-password')

alphaNumericPassword.addEventListener('click',function(e){
    e.target.innerText = 'Generate Again!'
    passwordBox.style.visibility = 'visible'
    firstPassword.textContent=""
    secondPassword.textContent=""
    for(let i=0 ; i < 13 ; i++){
        let password1 = Math.floor(Math.random()*alphaNumeric.length)
        firstPassword.textContent += alphaNumeric[password1];
    }
    
    for(let i=0 ; i < 13 ; i++){
        let password2 = Math.floor(Math.random()*alphaNumeric.length);
        secondPassword.textContent += alphaNumeric[password2];
    }

})