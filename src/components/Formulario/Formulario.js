import './Formulario.scss'
import car from '../../assets/coche.png'
const Formulario = () => {
  return (
    <div className="wrapper-form">
        <div className='wrapper-img-car'>
            <img src={car} alt='' />
        </div>
    </div>
  )
}

export default Formulario