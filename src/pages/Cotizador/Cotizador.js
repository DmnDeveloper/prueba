import Formulario from '../../components/Formulario'
import { AiOutlineLine } from 'react-icons/ai'
import './Cotizador.scss'



const Cotizador = () => {
  return (
    <div className='container-form'>
        <div className='cotizador-info'>
          <p className='cotizador-txt'>COTIZADOR</p>
          <p className='cotizador-txt-2'> <AiOutlineLine className='icon-flecha'/>ELIGE EL FiAT QUE VA CONTIGO<AiOutlineLine /> </p>
          <p className='cotizador-txt-3'> Elige el tuyo </p>
        </div>
        
        <Formulario />
    </div>
  )
}

export default Cotizador