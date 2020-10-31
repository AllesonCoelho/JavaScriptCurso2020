class Capitan{
    constructor(name, age, flightHours){
        this.name = name
        this.age = age
        this.flightHours = flightHours
    }
}

class Spaceship{
    constructor(name, crew, capitanName, capitanAge, capitanFlightHours){
        this.name = name
        this.crew = crew
        this.capitan = new Capitan(capitanName, capitanAge, capitanFlightHours)

    }
}

let spaceship = new Spaceship("Artemis", 13, "Will guy", 45, 300)