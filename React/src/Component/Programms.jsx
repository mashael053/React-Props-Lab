import '../Style/Programmer.css'


import Programms from '..Component/Programms'
import Service from '../Component/Service'
import Company from '..Component/Company'

function Programms(props) {
  return (
    <div className='div-big'>
        <h1 className='name'>{props.name}</h1>
        <h5 className='language'>{props.language}</h5>
        <p>{props.yearExprince}</p>
        <p>{props.nameCompany}</p>
    </div>

  )
}

export default Programms 