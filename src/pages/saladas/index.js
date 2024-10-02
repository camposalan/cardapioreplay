import './index.scss'
import Botao from '../../components/botao'
import Rodape from '../../components/rodape'

import image2 from  "../../images/refeicoes.svg"

export default function Saladas(){
    return(
        <div className='gera' >
            <Botao/>
        
                
         
            <br></br>
            <br></br>
         
            <div className='geral'>
            <img src={image2}/>
            <div/>

           
  

            <table className='tab' width="100%" border="1">
                <tr className='tr'>
                    <th >Produto</th>
                    <th>Preço</th>
                </tr>
                <tr>
                    <td >Coca-Coca</td>
                    <td >R$ 8,00</td>

                </tr>
                <tr>
                    <td >Agua Mineral</td>
                    <td >R$ 3,00</td>
                </tr>
                <tr>
                    <td > Guarana</td>
                    <td >R$ 8,00</td>
                </tr>
                <tr>
                    <td >Brahma Lata</td>
                    <td >R$ 9,00</td>
                </tr>
                <tr>
                    <td >Brahma Garrafa   </td>
                    <td > R$ 12,00</td>
                </tr>
                <tr>
                    <td >Red Bull   </td>
                    <td >R$ 20,00</td>
                </tr>
                <tr>
                    <td className='prod'>Vinho Galioto  </td>
                    <td className='prod'>R$ 35,00</td>
                </tr>
                <tr>
                    <td>Caipirinha</td>
                    <td>R$ 18,00</td>

                </tr>
                <tr>
                    <td>Caipirissima</td>
                    <td>R$ 18,00</td>

                </tr>
                <tr>
                    <td>Vodka</td>
                    <td>R$ 20,00</td>
                </tr>
                <tr>
                    <td>Cuba Libre</td>
                    <td>R$ 20,00</td>
                </tr>
                <tr>
                    <td>Rum Bacardi</td>
                    <td>R$ 20,00</td>
                </tr>
                <tr>
                    <td>Martine   </td>
                    <td>R$ 20,00</td>
                </tr>
                 <tr>
                    <td>Campari   </td>
                    <td>R$ 20,00</td>
                </tr>

                 <tr>
                    <td>Wisque Natu Nobilis   </td>
                    <td>R$ 20,00</td>
                </tr>
                 <tr>
                    <td>Wisque Old Eight   </td>
                    <td>R$ 20,00</td>
                </tr>
            </table>
          
            
               
               
           

            </div>
            <Rodape/>
        </div>
        
    )
}