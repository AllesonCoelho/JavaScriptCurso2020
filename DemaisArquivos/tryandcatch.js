class SpaceshipWeapon{
    constructor(indetifier){
        this.indetifier = indetifier
        this.shotsLeft = 5

    }

    shoot(){
        if(this.shotsLeft>0){
            console.log("Bang!")
            this.shotsLeft -= 1
        }

        else{
            throw new Error("Arma " + this.indetifier + " Sem municao")
        }
        
    }

    reload(){
        this.shotsLeft = 5
    }
}

let fenixWeapon = new SpaceshipWeapon(10)


try{
    fenixWeapon.shoot()//1
    fenixWeapon.shoot()//2
    fenixWeapon.shoot()//3
    fenixWeapon.shoot()//4
    fenixWeapon.shoot()//5
    fenixWeapon.shoot()//6 de 5 tiros
    console.log(fenixWeapon)
}catch(e){//idenpendete dele ter caido no catch ou nao o Finally eh apresentado
    console.log(e.message)
    fenixWeapon.reload()
}
finally{
    console.log("Armas deu bons tiros")
}

console.log(fenixWeapon)
