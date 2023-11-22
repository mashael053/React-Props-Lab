
import './App.css'
import Programers from './Component/Programms'
import Company from './Component/Company'
import Service from './Component/Service'
function App() {
  return (
    <>
<Company nameCompany="Aramco" numberEmployee="230 employrees" year ="2001"/>
<Programers name="Mashael" language="Python" yearExprince="One Year" nameCompany="Data Time Company"/>
<Service typeService="DBA" price="2300SR"/>
<Company nameCompany="Twuiqe Acadimy" numberEmployee="100 employree" year ="1900"/>
<Programers name="Malak" language="JavaScript" yearExprince="Two Years" nameCompany="Twuiqe Acadimy"/>
<Service typeService="UI Developer" price="2300SR"/>
<Company nameCompany="Vans Company" numberEmployee="300 employree" year ="1900"/>
<Programers name="Amzan" language="SQL" yearExprince="Three Years"nameCompany="Vans Company" />
<Service typeService="Software Engeneringf" price="2000SR"/> 

    </>
  )
}

export default App




