let spaceships = [
    {name: "Elemental", crewQuantity: 10},
    {name: "Colossus", crewQuantity: 8},
    {name: "Helmet", crewQuantity: 15}
]

spaceships.forEach(spaceship =>{
    alert(spaceship.name + " tem " + spaceship.crewQuantity + " tripulantes")
})