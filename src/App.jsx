import './App.css'
import NavBar from './component/daisyNav/navBar/NavBar'
import LineCharts from './component/lineCharts/LineCharts'
import Phones from './component/phones/Phones'
import PriceOption from './component/priceOption/PriceOption'
// import DaisyNav from './component/daisyNav/DaisyNav'

function App() {


  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      {/* <h1 className='text-5xl'>Vite + React</h1> */}

      <PriceOption></PriceOption>
      <LineCharts></LineCharts>
      <Phones></Phones>
    </>
  )
}

export default App
