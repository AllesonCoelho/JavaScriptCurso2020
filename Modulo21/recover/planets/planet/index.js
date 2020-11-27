import React from 'react'
import GrayImg from '../../shared/grey_img'
import DescriptionWithLink from "../../shared/description_with_link"



const Planet = (props) =>{//Colocar uma funcao anonima passando pro onclick que chama a outra funcao {/* onClick={() =>props.clickOnPlanet(props.name)}*/} 
//o fragment eh usado para que consiga devolver o h3 e outras tags sem precisa criar outra div


    //const names = ['a', 'b', 'c', 'd']//nao abrir chaves aqui 

    let title
    if (props.title_with_underline)
        title = <h4><u>{props.name}</u></h4>
    else
        title = <h4>{props.name}</h4>

    
    return (
        <div> 
        
            {title}
            <DescriptionWithLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>

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

export default Planet