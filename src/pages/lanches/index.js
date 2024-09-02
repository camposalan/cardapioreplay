import './index.scss'



import image2 from  "C:/cardapio/src/images/lanches.svg"
import Rodape from '../../components/rodape'
import Botao from '../../components/botao'


export default function Lanches(){
    return (
        <div className='gera' >
            <Botao/>
        
                
         
            <br></br>
            <br></br>
         
            <div className='geral'>
            <img src={image2}/>
            <div/>

           
  

            <table className='tab' width="100%" border="1">
            <tr className='tr'>
                    <th>Produto</th>
                    <th >Descrição</th>
                    <th>Preço</th>
                    
                </tr>
                <tr>
                    <td >Misto Quente</td>
                    <td> Duas fatias de pão, mussarela e presento</td>
                    <td >R$ 15,00</td>

                </tr>
                <tr>
                    <td >Americano</td>
                    <td> Duas fatias de pão na manteiga, ovo frito, mussarela e presento, alface e tomate</td>
                    <td >R$ 15,00</td>

                </tr>
                <tr>
                    <td >Filé</td>
                    <td> Duas fatias de pão, filezinho, alface e tomate</td>
                    <td >R$ 15,00</td>

                </tr>
                <tr>
                    <td >Queijo</td>
                    <td> Duas fatias de pão e mussarela</td>
                    <td >R$ 15,00</td>

                </tr>
                <tr>
                    <td >Presunto</td>
                    <td> Duas fatias de pão e presunto</td>
                    <td >R$ 15,00</td>

                </tr>
                <tr>
                    <td >Bauru</td>
                    <td> Pão redondo, presunto, mussarela, filet, alface e batata palha</td>
                    <td >R$ 20,00</td>

                </tr>
                <tr>
                    <td >X-Tudo</td>
                    <td> Pão redondo, carne, bacon, ovo, presunto, mussarel e batata palha</td>
                    <td >R$ 20,00</td>

                </tr>
                <tr>
                    <td >Hamburguer</td>
                    <td> Pão redondo, presunto, mussarela, carne, alface e tomate</td>
                    <td >R$ 20,00</td>

                </tr>
                    
            </table>
          
            
               
               
           

            </div>
            <Rodape/>
        </div>
        
        
       
       
    )
}