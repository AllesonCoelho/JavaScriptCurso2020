let spaceship = {
    name: "Demeter",
    type: "Extraction",
    maxCrew: 20,
    turnOn: function(){
        alert("Preparando compulsao")
        alert("Limpando computador de bordo")
    }
}

spaceship.velocity = 0
//spaceship.speedUp = function(spaceshipToSpeedUp, aceleration)
spaceship.speedUp = function(aceleration){
    this.velocity += aceleration

}

console.log(spaceship)

spaceship.speedUp(10)//(spaceship, 10)

console.log(spaceship)