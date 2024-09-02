import './index.scss'
import Precos from '../../components/precos'
import Rodape from '../../components/rodape'
import Promo from '../../components/precos/index1'
import Quinta from '../../components/precos/index2'
import Domingo from '../../components/precos/index3'



export default function Tabela(){
    return(
        <div className='pagina-tabela'>
        
            <div className='items'>
                <Precos titulo ="Promoção de Segunda/Quarta" />
                <Promo promo="Promoção Pernoite Segunda/Quarta" />
                <Quinta quinta="Preços de Quinta/Domingo" />
                <Domingo domingo="Pernoite de Quinta/Domingo" />
            

            </div>
            
            
            <Rodape/>
        </div>
        
    )
}