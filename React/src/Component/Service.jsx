import Programs from './Component/Programms'
import Company from './Component/Company'
function Service(props) {
  return (
    <div className="service">
        <p className="typeService">{props.typeService}</p>
        <p className="price">{props.price}</p>

    </div>
  )
}

export default Service