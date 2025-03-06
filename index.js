const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


btn.addEventListener("click", function() {
    document.querySelector("#firstPassword").textContent = ""
    document.querySelector("#secondPassword").textContent = ""
    for (let i =0; i < 15 ; i++){
        document.querySelector("#firstPassword").textContent += characters[Math.floor(Math.random()*characters.length)]
        
        document.querySelector("#secondPassword").textContent += characters[Math.floor(Math.random()*characters.length)]
    }
})



function copyToClipboard(elementId) {
    let temp = document.createElement('textarea');
    temp.value = document.querySelector(`#${elementId}`).textContent;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
}

// Add event listeners to both passwords
document.querySelector("#firstPassword").addEventListener("click", function() {
    copyToClipboard("firstPassword");
});

document.querySelector("#secondPassword").addEventListener("click", function() {
    copyToClipboard("secondPassword");
});



