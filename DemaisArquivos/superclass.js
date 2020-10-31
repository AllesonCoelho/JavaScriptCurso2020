class Spaceship{
    constructor(name, crew, maxVelocity){
        this.name = name
        this.crew = crew
        this.maxVelocity = maxVelocity

        this.currentVelocity = 0
    }

    speedUp(aceleration){
        this.currentVelocity += aceleration

        if(this.currentVelocity > this.maxVelocity){
            alert("Velocidade muito alta!!!")
        }
    }
}

class TransportSpaceship extends Spaceship{
    constructor(name, crew, maxVelocity, maxLoadHeight){//adiciona o maxload
        super(name, crew, maxVelocity, maxLoadHeight)
        this.maxLoadHeight = maxLoadHeight

    }

    speedUp(aceleration){//reaproveitar so que mudando valores
        aceleration /=2
        alert("Incrementando velocidade" + aceleration)
        super.speedUp(aceleration)//vai passar o novo valor da aceleration
    }
}

let transportSpaceship = new TransportSpaceship("Tranportadora", 4, 100, 400)

console.log(transportSpaceship)

transportSpaceship.speedUp(210)

