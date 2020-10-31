let shipName = prompt('Type ship name here')

//Cleberson nome
//012345678 pos
//123456789 num caractere

newName = ""

for(let i = shipName.length - 1; i>=0;i--)//1
{
    //           9-1     = 1
//               9            1    
/*               8            2
                 7            3
                 6            4
                 5            5
                 4            6
                 3            7
                 2            8
                 1            9

*/

    if(shipName[i] == "e")
    {
        break
    }
    newName+=shipName[i]
}

alert('Nome original da nave ' + shipName + "\nNovo nome eh " + newName)

