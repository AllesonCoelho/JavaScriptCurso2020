import React from 'react'
import GrayImg from '../../shared/grey_img'
import DescriptionWithLink from "../../shared/description_with_link"




async function getSatellites(id){
    let response = await fetch(`http://localhost:3000/api/${id}.json`)
    let data = await response.json()
    return data
}

class Planet extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            satellites: []
        }

    }
    componentDidMount(){
        getSatellites(this.props.id).then(data => {
            this.setState(state =>({
                satellites: data["satellites"]
            }))
        })
    }


    
    render(){
        let title
        if (this.props.title_with_underline)
            title = <h4><u>{this.props.name}</u></h4>
        else
            title = <h4>{this.props.name}</h4>
        return (
            <div> 
            
                {title}
                <DescriptionWithLink description={this.props.description} link={this.props.link}/>
                <GrayImg img_url={this.props.img_url} gray={this.props.gray}/>
                <h4>Satelites</h4>
                <ul>
                {this.state.satellites.map((satellites, index)=>
                <li key={index}>{satellites.name}</li>
                )}
                </ul>
                
    
                {/* <h4>Satelites</h4>
                <ul>
                    {
                        ['a', 'b', 'c', 'd'].map((n) =>
                            <li>Satelite {n}</li>
                        )
                    }
                </ul>
                */}
                <hr/>
            </div>
                
            
        )

    }
}



/*const Planet = (props) =>{//Colocar uma funcao anonima passando pro onclick que chama a outra funcao {/* onClick={() =>props.clickOnPlanet(props.name)}} 
//o fragment eh usado para que consiga devolver o h3 e outras tags sem precisa criar outra div


    //const names = ['a', 'b', 'c', 'd']//nao abrir chaves aqui 

    

    
    

}*/

export default Planet