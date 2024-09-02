
import './index.scss'


export default function Precos(props){

    return(
        <div className='comp-preco'>
            <div>
                <h1>{props.titulo}</h1>
                <select>
                    <option value="ap">Apartamento Luxo - R$ 55,00</option>
                    <option value="su">Apartamento Luxo - R$ 60,00</option>
                    <option value="sp">Apartamento Luxo - R$ 90,00</option>
                    <option value="hd">Apartamento Luxo - R$ 180,00</option>
                    <option value="mt">Apartamento Luxo - R$ 350,00</option>
                    <option value="hr">HORA EXCEDENTE - R$ 20,00</option>
                </select>
            </div>
            
            
        </div>
    )
}
