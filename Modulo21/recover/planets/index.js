import React, {Fragment} from 'react'
import Planet from './planet'

/*
const showMessage = () =>{
    console.log("Meu primeiro evento!!!")

}
*/

/*
const clickOnPlanet = (name) =>{
    console.log(`Um Click no planeta!!! ${name}`)

}
*/

class Planets extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                planets: [
                    {
                        name:"Mercurio",
                        description:"Proident anim tempor enim amet quis adipisicing dolore mollit. Nostrud exercitation nisi ex reprehenderit deserunt consectetur ut labore incididunt Lorem officia. Dolor amet in consequat anim. Consectetur non deserunt aute culpa minim anim duis laboris quis reprehenderit deserunt. Est commodo mollit ullamco sunt qui non exercitation ex quis aliqua fugiat.",    
                        img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/600px-Mercury_in_color_-_Prockter07-edit1.jpg",
                        link:"https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)",
                        /*clickOnPlanet={clickOnPlanet}*/
                        title_with_underline :true,
                        grey:true
                    },
                    {
                        name:"Marte",
                        description:"Proident anim tempor enim amet quis adipisicing dolore mollit. Nostrud exercitation nisi ex reprehenderit deserunt consectetur ut labore incididunt Lorem officia. Dolor amet in consequat anim. Consectetur non deserunt aute culpa minim anim duis laboris quis reprehenderit deserunt. Est commodo mollit ullamco sunt qui non exercitation ex quis aliqua fugiat.",
                        img_url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/600px-OSIRIS_Mars_true_color.jpg"
                        /*link="https://pt.wikipedia.org/wiki/Marte_(planeta)"*/
                        /*clickOnPlanet={clickOnPlanet}*/

                    }



                ]
        }

    }

    removeLast = () =>{
        let new_planets = [...this.state.planets]
        new_planets.pop()
        this.setState(state => ({
            planets: new_planets //planets chama new planets

        }))

    }

    duplicateLastPlanet = () =>{
        let last_planet = this.state.planets[this.state.planets.length - 1]//gerando uma chave que seleciona dentro de um array a posicao sendo [1,2,3].length - 1 que daria 2 
        this.setState(state =>({
            planets: [...this.state.planets, last_planet]//pega todos os planetas que existe e passa um novo com last Planet

        }))

    }

    render() {
        return (//o fragment eh usado para que consiga devolver o h3 e outras tags sem precisa criar outra div
            <Fragment>
                <h3>Planets list</h3>
                {/*<button onClick={showMessage}>Show Message</button> */}
                <button onClick={this.removeLast}>Remove Last</button>
                <button onClick={this.duplicateLastPlanet}>Add Last Planet</button>
                <hr />
                {this.state.planets.map((planet) =>
                    <Planet
                        name={planet.name}
                        description={planet.description}
                        img_url={planet.img_url}
                        link={planet.link}
                        /*clickOnPlanet={clickOnPlanet}*/
                        title_with_underline={planet.title_with_underline}
                        grey={planet.grey}
                        
                    />
                )}
                {/*
                <Planet
                    name={this.state.planets[1].name}
                    description={this.state.planets[1].description}
                    img_url={this.state.planets[1].img_url}
                    //link="https://pt.wikipedia.org/wiki/Marte_(planeta)"
                    //clickOnPlanet={clickOnPlanet}
                />
                */}

            </Fragment>


        )
    }

    
    
}

export default Planets

/* < Planet
name = { this.state.planets[0].name }
description = { this.state.planets[0].description }
img_url = { this.state.planets[0].img_url }
link = { this.state.planets[0].link }
//clickOnPlanet={clickOnPlanet}
title_with_underline = { this.state.planets[0].title_with_underline }
grey = { this.state.planets[0].grey }
/>
*/