function spinYellow(elmentos){
    elmentos.forEach(element => {
        document.getElementById(element).style.animation = 'girar-yellow 1s ease-in-out forwards';
    });
}
function spinGreen(elmentos){
    elmentos.forEach(element => {
        document.getElementById(element).style.animation = 'girar-green 1s ease-in-out forwards';
    });
}

function spinGray(elmentos){
    elmentos.forEach(element => {
        document.getElementById(element).style.animation = 'girar-gray 1s ease-in-out forwards';
    });
}