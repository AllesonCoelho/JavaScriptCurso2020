import React, {Fragment, useState, useEffect} from 'react'
import Planet from './planet'
import Form from './form'

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
/*
    
*/
const Planets = () =>{
    const [planets, setPlanets] = useState([
    ])



    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (new_planet) =>{
        setPlanets([...planets, new_planet])
    }
    





    

    return (//o fragment eh usado para que consiga devolver o h3 e outras tags sem precisa criar outra div
        <Fragment>
            <h3>Planets list</h3>
            {/*<button onClick={showMessage}>Show Message</button> */}
            <hr />
            <Form addPlanet={addPlanet}/>
            <hr />
            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    /*clickOnPlanet={clickOnPlanet}*/
                    title_with_underline={planet.title_with_underline}
                    grey={planet.grey}
                    key={index}

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