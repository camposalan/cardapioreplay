
import './index.scss'


export default function Domingo(props){

    return(
        <div className='comp-preco'>
            <div>
                <h1>{props.domingo}</h1>
                <select>
                    <option value="ap">Apartamento Luxo - R$ 180,00</option>
                    <option value="su">Apartamento Luxo - R$ 190,00</option>
                    <option value="sp">Apartamento Luxo - R$ 210,00</option>
                    <option value="hd">Apartamento Luxo - R$ 250,00</option>
                    <option value="mt">Apartamento Luxo - R$ 390,00</option>
                    <option value="hr">HORA EXCEDENTE - R$ 20,00</option>
                </select>
            </div>
            
            
        </div>
    )
}