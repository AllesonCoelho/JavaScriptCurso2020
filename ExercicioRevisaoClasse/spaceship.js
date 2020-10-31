class Spaceship{
    static get DESACELARTION_RATE(){
        return 0.17
    }

    constructor(name, crew){
        this.name = name
        this.crew = crew
        this.currentVelocity = 0
    }


    speedUp(aceleration){
        this.currentVelocity += aceleration * (1 - Spaceship.DESACELARTION_RATE)

    }
}

