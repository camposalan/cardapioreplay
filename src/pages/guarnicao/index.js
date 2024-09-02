import './index.scss'

import Botao from '../../components/botao'
import Rodape from '../../components/rodape'

import image2 from  "C:/cardapio/src/images/lanches.svg"

export default function Guarnicao(){

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
                    <th>Descrição</th>
                    <th>Preço</th>
                </tr>
                <tr>
                    <td >Omelete Simples</td>
                    <td >--</td>
                    <td>R$20,00</td>

                </tr>
                <tr>
                    <td >Omelete Mista</td>
                    <td >Queijo e Presunto</td>
                    <td>R$ 25,00</td>
                </tr>
                <tr>
                    <td > Omelete de Cebola</td>
                    <td>Queijo, presunto e cebola</td>
                    <td>R$ 25,00</td>
                </tr>
                <tr>
                    <td >Ovos Estrelados</td>
                    <td >Dois</td>
                    <td>R$ 6,00</td>
                </tr>
                <tr>
                    <td >Arroz Simples </td>
                    <td > --</td>
                    <td>R$ 15,00</td>
                </tr>
                <tr>
                    <td >Arroz à La Grega   </td>
                    <td >--</td>
                    <td>R$ 18,00</td>
                </tr>
                <tr>
                    <td >Farofá c/Ovos   </td>
                    <td >--</td>
                    <td>R$ 12,00</td>
                </tr>
                <tr>
                    <td>Farofá Completa   </td>
                    <td >--</td>
                    <td>R$ 12,00</td>
                </tr>
                <tr>
                    <td >Purê de Batata   </td>
                    <td >--</td>
                    <td>R$ 15,00</td>
                </tr>
                
            </table>
          
            
               
               
           

            </div>
            <Rodape/>
        </div>
    )
}