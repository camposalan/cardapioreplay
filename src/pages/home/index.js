
import Cabecalho from '../../components/cabecalho';

import Tabela from '../tabela';
import './index.scss';
import { Link } from 'react-router-dom';


export default function Cardapio() {
  return (
    <div className='geral'>
     
      <Cabecalho/>
    

        <div className='cardapio'>
         <h2> Cardápio</h2>
         <br></br>
         <br>
         </br>
         <br></br>
         <div/>

         <div className='link'>
          <Link to="/bebidas">Bebidas/Doces</Link>
          <Link to="/refeicoes">Refeições/Saladas</Link>
          <Link to="/lanches">Lanches</Link>
          <Link to="/guarnicao">Guarnição/Petiscos</Link> 

          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>

      

         </div>

      
        </div>
       

        <div>
          <br></br>
          <br></br>
          <br></br>
          <h2 className='cardapio'>Tabela de  Preços</h2>
        </div>

      

      
      <div>
        <br></br>

       
   

        <Tabela/>
     


      </div>
    
      
  
     
    </div>
  );
}


