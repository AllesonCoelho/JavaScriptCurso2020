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
    speedUp(){
        alert('Adicionado mais 1 na sobre escrita')
        this.currentVelocity += 1
        
    }
}



let transportSpaceship = new TransportSpaceship("Darwin", 10, 200)
transportSpaceship.speedUp()