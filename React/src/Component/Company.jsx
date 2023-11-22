import '../Style/Company.css'
import Programs from './Component/Programms'
import Service from './Component/Service'

function Company(props) {
   return (
    <div className='div-big'>
        <div className='div1'>
        <h1 className='nameCompany'>{props.nameCompany}</h1>
        <h5 className='number'>{props.numberEmployee}</h5>
        <p className='yearFounding'>{props.year}</p>
        </div>
</div>
 )
}
export default Company

