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

async function getPlanets(){
    let response = await fetch('http://localhost:3000/api/planets.json')
    let data = await response.json()
    return data
}

class Planets extends React.Component{
    constructor(props){
        super(props)
        this.state = {
                planets: [


                ]
        }

    }



    componentDidMount(){
        getPlanets().then(data =>{
            this.setState(state =>({
                planets: data['planets']
            }))
        })

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