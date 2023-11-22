import '../Style/Company.css'

function Company() {
   return (
    <div className='div-big'>
    <h1 className='name'>{props.nameCompany}</h1>
    <h5 className='number'>{props.numberEmployee}</h5>
    <p>{props.year}</p>
</div>

 )
}
export default Company

