


function slowDown(velocity, printer){//printer vai receber uma funcao e imprimir a nova velocidade
    let decelaretion = 20

    while(velocity > 0)
    {
        printer(velocity)
        velocity = velocity - decelaretion
    }

    alert('Nave parada as comportas podem ser abertas!')
}

let anotherVelocity = 150
slowDown (anotherVelocity, function(velocity) { // function(velocity
    console.log("Velocidade atual eh: " + velocity)

})



