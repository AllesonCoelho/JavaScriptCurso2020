let shipName = prompt('Name your ship here: ')
let caracter = prompt('Chose caracter: ')
let newCaracter = prompt('Type here new caracter: ')
let newName = ""

for(let i=0; i<shipName.length; i++)
{
    if(shipName[i] == caracter)
    {
        newName += newCaracter
    }
    else{
        newName += shipName[i]
    }


}

alert('O novo nome da nave eh ' + newName)