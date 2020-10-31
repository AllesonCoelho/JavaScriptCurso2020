let spaceship = {
    velocity: 0,
    speedUp: function (aceleration) {
        this.velocity += aceleration
    }
}


function registerSpaceship() {
    spaceship.name = prompt("Type here your spaceship name!")
    spaceship.type = prompt("Type the here your spaceship type!")
    spaceship.maxVelocity = Number(prompt("The max spaceship velocity: "))
}

function acelerate() {
    let aceleration = Number(prompt("How much do you want acelerate: "))
    spaceship.speedUp(aceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert("VELOCIDADE MAXIMA ULTRAPASSADA!!!" +
            "\nVelocidade da nave eh " + spaceship.velocity +
            "A velocidade maxima eh " + spaceship.maxVelocity)
    }
}

function stop() {
    alert("Nome: " + spaceship.name + "tipo: " + spaceship.type + "\nVelocidade da nave" +
        spaceship.velocity + " A velocidade maxima da nave eh " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let chosenOption
    do {
        chosenOption = prompt("Do you want stop or acelerate: \n1-Acelerar \n2-Stop")
        switch (chosenOption) {
            case "1":
                acelerate()
                break
            case "2":
                stop()
                break
            default:
                alert("Opcao invalida! ")
        }
    }while (chosenOption != "2")//Ele vai exibir o menu enquanto ele seja diferente de 2
}

registerSpaceship()
showMenu()









