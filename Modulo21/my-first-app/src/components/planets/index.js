import React, {Fragment} from 'react'
import Planet from './planet'
const Planets = () =>{
    return (//o fragment eh usado para que consiga devolver o h3 e outras tags sem precisa criar outra div
        <Fragment>
            <h3>Planets list</h3>
            <hr/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
            <Planet/>
        </Fragment>
            
        
    )

}

export default Planets