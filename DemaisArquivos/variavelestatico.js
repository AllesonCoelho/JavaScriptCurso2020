class Spaceship{
    static get desacelarationRate(){
        return 0.15
    }
    constructor(name){
        this.name = name
        this.currentVelocity = 0
    }

    speedUp(aceleration){
        this.currentVelocity += (aceleration *(1- Spaceship.desacelarationRate))//o desacelerationRate nao repcisa do () por causa do get
    }
}

let spaceship  = new Spaceship("Apollo")
spaceship.speedUp(500)

console.log(spaceship)