class App{
    constructor(){
        this.spaceship = null
    }

    start(){
        this.enrollSpaceship()
        let chosenOption
        do{
            chosenOption = this.showInitialMenu()
            this.redirectFeature(chosenOption)
        }while(chosenOption != "3")
        this.printAndQuit()
    }

    enrollSpaceship(){
        let name = prompt("Type the ship name")
        let crew = prompt("Type the crew quantity")
        let kind = this.askForSpaceshipKind()
        if(kind == "1"){
            let weapons = prompt("Type the number of weapons")
            this.spaceship = new BattleSpaceship(name, crew, weapons)
        }
        else{
            let seats = prompt("Type the number of seats")
            this.spaceship = new TransportSpaceship(name, crew, seats)

        }
    }

    askForSpaceshipKind(){
        let chosenOption
        while(!["1","2"].includes(chosenOption)){/*/Vou verificar do metodo includes, 
            se o chosenoption esta incluido nesse array, o chosenOption comeca como Undefined, 
            enquanto o chosenOption NAO estiver incluido no array*/
            chosenOption = prompt("Chose the kind of the ship\n1-For Battle Spaceship \n2-For Transport Spaceship")
        }
        return chosenOption //enquanto ele nao selecionar um 1 e 2 ele vai retornar as perguntas
    }

    showInitialMenu(){
        const promptMessage =   "What you want to do?\n" + 
                                "1-Acelerate the ship\n " +
                                "2-Change the ship\n " + 
                                "3-Print and Quit "
        
        let chosenOption = prompt(promptMessage)
        while(!["1","2", "3"].includes(chosenOption)){
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }
    redirectFeature(chosenOption){
        switch(chosenOption){
            case "1":
                this.accelerateSpaceship()
                break
            case "2":
                this.enrollSpaceship()
                break
        }
    }

    accelerateSpaceship(){
        let aceleration = Number(prompt("How much you want to acelerate?"))
        this.spaceship.speedUp(aceleration)
    }

    printAndQuit(){
        let finalMessage = "Name " + this.spaceship.name + "\n" +
                            "Crew Quantity " + this.spaceship.crew + "\n" +
                            "Current Velocity " + this.spaceship.currentVelocity + "\n"
        alert(finalMessage)
    }
}