class Spaceship{
    constructor(name, crew, maxVelocity){
        this.name = name
        this.crew = crew
        this.maxVelocity = maxVelocity

        this.currentVelocity = 0
    }

    acelerate(aceleration){
        this.currentVelocity += aceleration

        if(this.currentVelocity > this.maxVelocity){
            alert("Velocidade muito alta!!!")
        }
    }
}

class BattleSpaceship extends Spaceship{
    stop(){
        this.currentVelocity = 0
        alert('batalha')
    }
}


class DiscoverySpaceship extends Spaceship{
    stop(){
        this.currentVelocity = 0
        alert('Recolhendo equipamento de amostrar e parando nave de batalh')
    }
}

let darwin = new DiscoverySpaceship("Darwin", 10, 200)
let fenix = new BattleSpaceship("Fenix", 8, 240)