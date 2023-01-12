const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15
let passwordOne = document.getElementById("password_1")
let passwordTwo = document.getElementById("password_2")

function getRandom() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}


function generatePassword(){
    let randomPassword1 =""
    let randomPassword2 =""

    for(let i=0; i<passwordLength; i++){
        randomPassword1 += getRandom()
        randomPassword2 += getRandom()
    }
    passwordOne.textContent = randomPassword1
    passwordTwo.textContent = randomPassword2
}

function clearScreen() {
    document.getElementById('password_1').textContent = '';
    document.getElementById('password_2').textContent = '';
  }
  


