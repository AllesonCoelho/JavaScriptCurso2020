let ly = prompt('Digite o ano luz')
let option = prompt('Escolha uma opcao \n1-(PC)Parsec \n2-(AU)Unidade Astronomica \n3-(KM)Quilometros')

let chosenUnity
let convertDistance
switch (option) {
    case "1":
        chosenUnity = 'Parsec'
        convertDistance = ly * 0.306601
        break
    case "2":
        chosenUnity = 'Unidade Astronomica'
        convertDistance = ly * 63241.1
        break
    case "3":
        chosenUnity = 'Kilometros'
        convertDistance = ly * 9.5 * Math.pow((10, 12) * ly)
        break
    default:
        chosenUnity = "Unidade nao identificada"
        convertDistance = "Unidade fora de escopo"
}

alert('Distancia em anos luz ' + ly + '\n' + chosenUnity + ': ' + convertDistance)