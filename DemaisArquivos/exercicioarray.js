const hitchedSpaceship = [
    //    0   1  2
    ["Fenix", 8 ,true],
    ["Golias", 10 ,true],
    ["Helmet", 5 ,false],
    ["Elemental", 3 ,true],
    ["Darwin", 15 ,false]
]
let filtroTripulantes = hitchedSpaceship.filter(element => {
    return element[1] >= 9
}).map(element =>{ //o map retorna somente o nome, ja aproveita esse element 
    return element[0]
})
let filtroEmbarque = hitchedSpaceship.findIndex(element =>{
    return element[2] == false
})

let uncasedSpaceship = hitchedSpaceship.map(element => {
    return element[0].toUpperCase()
})


let message = "Espacos com mais de 9 tripulantes: " + filtroTripulantes.join(", ") //o join incrementa o espaco virgula no alert
message += "\nPlataforma com processo de engate: " + (filtroEmbarque + 1)
message += "\nEspaconaves destacadas: " + uncasedSpaceship.join(", ")

alert(message)

//nao usados
//console.log(filtroTripulantes)
//console.log(filtroEmbarque)
//console.log(uncasedSpaceship)
