
// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};
let changeBgColor
const startChangingColor = function(){
    if (!changeBgColor) { 
        changeBgColor = setInterval(bgChange, 1500)
    function bgChange(){document.body.style.backgroundColor = randomColor();}
        
    }    
}

const stopChangingColor = function(){
    clearInterval(changeBgColor);
    changeBgColor = null;
}
document.querySelector("#start").addEventListener
('click', startChangingColor);
document.querySelector("#stop").addEventListener
('click', stopChangingColor);