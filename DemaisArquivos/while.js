let dobra = 0
let conf = ""
let shipName = prompt('Type the ship name here')

conf = prompt('Do you want to going to double? \n1-Para sim \n2-Para nao')

while (conf == "1") {
    dobra += 1
    conf = prompt('Do you want to going to double? \n1-Para sim \n2-Para nao')
}

alert('nave: ' + shipName + 'e deu ' + dobra +' voltas')