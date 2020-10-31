let hitchedSpaceship = ["Destroyer" , "Fenix", "Helberd", "Aligator", "Bounty Hunter" , "Silencer"]

/*find ela retorna o primeiro elemento que satisfas a condicao, o find retorna o elemento em sim 
ja filter faz o contrario */
let with7Chars = hitchedSpaceship.filter(element => { return element.length >= 7})

console.log(with7Chars)