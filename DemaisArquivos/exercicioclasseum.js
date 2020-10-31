class registerShip{
    constructor(name, crew){
        this.name = name
        this.crew = crew
        this.novoEngate = false
        this.doorOpen = false
    }
    engate(){
        this.novoEngate = true
        this.doorOpen = true
        
    }

}

function showMenu(){
    let chosenOption
    
    while(chosenOption !="1" && chosenOption !="2" && chosenOption !="3") {
        chosenOption = prompt("What do you want to do?\n" +
                                "1- Hitch the ship \n" +
                                "2- Show the ship list \n" +
                                "3- Quit")

    }
    return chosenOption
}

function createSpaceship() {
    spaceshipName = prompt("Name here your space ship")
    spaceshipCrew = prompt("The total number of the crew")
    let spaceship = new registerShip(spaceshipName, spaceshipCrew)
    return spaceship

}

function printSpaceshipList(spaceships){
    let spaceshipList = ""
    spaceships.forEach((spaceship, index) =>{
        spaceshipList+=(index + 1) + "- " + spaceship.name + " (" + spaceship.crew +  " tripulantes\n"
    })
    alert(spaceshipList)
}

let listShips = []
let chosenOption

while(chosenOption!="3"){
    chosenOption = showMenu()

    switch(chosenOption){
        case "1":
            let spaceshipToAdd = createSpaceship()
            spaceshipToAdd.engate()
            listShips.push(spaceshipToAdd)
            break
        case "2":
            printSpaceshipList(listShips)
            break
    }


}




/*
        switch (chosenOption) {
            case "1":
                registerSpaceship.name = prompt("Name here your space ship")
                registerSpaceship.crew = prompt("The total number of the crew")
                registerSpaceship.engate = true
                if(engate == true)
                {


                }
                let listShips = new Array(registerSpaceship)
                break

            case "2":
                console.log(listShips())
                break
            
            default:
            return showMenu()
    }
*/



