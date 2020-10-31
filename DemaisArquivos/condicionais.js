let pilotName = prompt('Type here your name')
let velocity = 0
let totalVelocity = prompt('Type velocity here')

let sureVelocity = comfirm('Are you sure?' + totalVelocity + (Km/S))

if(sureVelocity){
    velocity = totalVelocity
}

if(totalVelocity <=0){
    alert('A sua nave esta parada')
}
else if (velocity < 40) {
    alert('Voce esta muito lento')
}
else if (velocity < 80) {
    alert('Parece uma boa velocidade para manter')
}
else if (velocity < 100) {
    alert('Velocidade alta, considere manter')
}
else {
    alert('Velocidade perigosa')
}


alert('Piloto ' + pilotName + '\nVelocidade' + totalVelocity + 'Km/s')