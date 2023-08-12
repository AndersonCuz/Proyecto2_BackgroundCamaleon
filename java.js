const btnGenerar = document.querySelector('#generar-color');
const body = document.querySelector("body");
const codigoColor = document.querySelector('#codigo-color');

function randonHexNumber(){
    const num = parseInt(Math.random()*16)
    if(num < 10){
        return num;
    }
    return String.fromCharCode(num + 55)
}

function randonHexColor(){
    let nuevoColor ='#';
    for (let i = 0; i<6; i++){
        nuevoColor = nuevoColor + randonHexNumber()
    }
    return nuevoColor;
}

btnGenerar.addEventListener('click', ()=>{
 const nuevoColor = randonHexColor();
 body.style.background = nuevoColor;
 codigoColor.textContent = nuevoColor;
})