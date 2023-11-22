import '../Style/Programmer.css'
function Programers(props) {
  return (
    <div className='div-big'>
        <h1 className='name'>{props.name}</h1>
        <h5 className='language'>{props.language}</h5>
        <p>{props.yearExprince}</p>
        <p>{props.nameCompany}</p>
    </div>

  )
}

export default Programers 