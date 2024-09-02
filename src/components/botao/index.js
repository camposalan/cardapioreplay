import './index.scss'

import { Link } from 'react-router-dom'

export default function Botao(){
    return(
        <div>
            <div className='disk'>
            <Link className='volta' to="/">Voltar</Link>
            <a href='#' className='botao'>Disque 21 <br/>Faça seu Pedido</a>

            </div>
        </div>
    )
}