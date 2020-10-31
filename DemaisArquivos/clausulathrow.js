class SpaceshipWeapon{
    constructor(indetifier){
        this.indetifier = indetifier
        this.shotsLeft = 5

    }

    shoot(){
        if(shots>0){
            console.log("Bang!")
            this.shotsLeft -= 1
        }

        else{
            throw new Error("Arma " + this.indetifier + " Sem municao")
        }
        
    }
}

let fenixWeapon = new SpaceshipWeapon(10)

fenixWeapon.shoot()//1
fenixWeapon.shoot()//2
fenixWeapon.shoot()//3
fenixWeapon.shoot()//4
fenixWeapon.shoot()//5
fenixWeapon.shoot()//6 de 5 tiros
console.log(fenixWeapon)