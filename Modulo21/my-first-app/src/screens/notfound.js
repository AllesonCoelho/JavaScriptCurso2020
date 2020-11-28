import React from 'react'
import Planets from '../components/planets'

import {Link} from 'react-router-dom'


const NotFoundScreen = () =>{
    return (
        <div>
            <h3>Pagina nao encontrada</h3>
            <Link to='/'>Voltar a Listagem</Link>
        </div>
    )

}

export default NotFoundScreen