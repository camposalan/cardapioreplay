
import './index.scss'


export default function Quinta(props){

    return(
        <div className='comp-preco'>
            <div>
                <h1>{props.quinta}</h1>
                <select>
                    <option value="ap">Apartamento Luxo - R$ 65,00</option>
                    <option value="su">Apartamento Luxo - R$ 70,00</option>
                    <option value="sp">Apartamento Luxo - R$ 100,00</option>
                    <option value="hd">Apartamento Luxo - R$ 200,00</option>
                    <option value="mt">Apartamento Luxo - R$ 350,00</option>
                    <option value="hr">HORA EXCEDENTE - R$ 20,00</option>
                </select>
            </div>
            
            
        </div>
    )
}
