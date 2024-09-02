import Cabecalho from '../../components/cabecalho';
import './index.scss';
import { Link } from 'react-router-dom';

import image1 from  "C:/cardapio/src/images/refeicoes.svg"
import Rodape from '../../components/rodape';
import Botao from '../../components/botao';


export default function Refeicoes(){
    return(

        <div className='gera' >
            <Botao/>
        
                
         
            <br></br>
            <br></br>
         
            <div className='geral'>
            <img src={image1}/>
            <div/>

           
  

            <table className='tab' width="100%" border="1">
                <tr className='tr'>
                    <th>Produto</th>
                    <th >Descrição</th>
                    <th>Preço</th>
                    
                </tr>
                <tr>
                    <td >Filet Simples</td>
                    <td> Filet com Fritas e Arroz</td>
                    <td >R$ 95,00</td>

                </tr>
                <tr>
                    <td >Filet Replay</td>
                    <td>Filet com bacon, arroz a Grega, batata frita</td>
                    <td >R$ 110,00</td>
                </tr>
                <tr>
                    <td > Filet a Parmegiana</td>
                    <td>Filet coberto com molho, mussarela, presunto, tomate, queijo ralado <br></br>
                    manteiga, cebola, purê de batata e arroz</td>
                    <td >R$ 120,00</td>
                </tr>
                <tr>
                    <td >Filet à Francesa</td>
                    <td> Filet coberto com molho, presunto, ervilha, tomate, cebola, queijo ralado<br></br>
                    manteiga, batata frita e arroz</td>
                    <td >R$ 120,00</td>
                </tr>
                <tr>
                    <td >Filet à Campanhad  </td>
                    <td>Filet, farofa completa, molho vinagrete e arroz</td>
                    <td > R$ 120,00</td>
                </tr>
                <tr>
                    <td >Filet a Cavalo   </td>
                    <td>Filet com dois ovos, arroz e batata frita</td>
                    <td >R$ 100,00</td>
                </tr>
                <tr>
                    <td>Filet Diplomata  </td>
                    <td>Filet a milanesa, coberto com queijo,batata portuguesa e arroz à Grega</td>
                    <td>R$ 120,00</td>
                </tr>
                <tr>
                    <td>Lasanha Bolonhesa  </td>
                    <td>Serve duas pessoas</td>
                    <td>R$ 40,00</td>
                </tr>

                <br></br>
                
                
                <h2> SALADAS</h2>
                              
                <tr className='tr'>
                    <th>Produto</th>
                    <th >Descrição</th>
                    <th>Preço</th>
                    
                </tr>
                <tr>
                    <td >Salada Russa</td>
                    <td> Batata, cenoura, pimentão, ervilha, cebola, tomate, ovos cozidos, azeitona, milho</td>
                    <td >R$ 25,00</td>

                </tr>
                <tr>
                    <td >Salada Mista</td>
                    <td> Batata, cenoura, ervilha, presunto, tomate</td>
                    <td >R$ 25,00</td>

                </tr>
                <tr>
                    <td >Salada Tomate</td>
                    <td> tomate e cenoura</td>
                    <td >R$ 15,00</td>

                </tr>
                
            </table>
          
            
               
               
           

            </div>
            <Rodape/>
        </div>
        

        
    )
}