let shipName = prompt("Type ship name here: ")
let velocity = 0
let chosenOption

function showMenu(){
    let option
    while(option != "1" && option != "2" && option != "3" && option != "4")
    {
        option = prompt("O que voce deseja fazer \n" +
                        "1-Acelerar em 5m/s      \n" +
                        "2-Desacelerar em 5m/s          \n" +
                        "3-Imprimir dados de bordo      \n" +
                        "4-Sair do programa             \n")
    }

    return option

}

function speedUP(velocity)
{
    let newVelocity = velocity + 5
    return newVelocity
}

function slowDown(velocity)
{
    let newVelocity = velocity - 5
    if(newVelocity<0)
    {
        newVelocity = 0
    }
    return newVelocity
}

function prinName(name, velocity)
{
    alert('Espaco nome ' + name + "\nVelocidade" + velocity + "Km/s")
}

do{
    chosenOption = showMenu()
    switch(chosenOption)
    {
        case"1":
            velocity = speedUP(velocity)
            break
        case"2":
            velocity = slowDown(velocity)
            break
        case"3":
            prinName(name, velocity)
            break
        default:
            alert('Encerrando a aplicacao')    
    }

}
while(chosenOption!="4")