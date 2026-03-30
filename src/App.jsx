
import './App.css'
import Achivement from './Component/Achivement/Achivement'
import Banner from './Component/Banner/Banner'
import Navber from './Component/Navber/Navber'
import Products from './Component/Products/Products'

const getProduct = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const productPromise = getProduct()

function App() {
 

  return (
    <>
      <Navber/>
      <Banner/>
      <Achivement/>
       <Products productPromise={productPromise} />
    </>
  )
}

export default App
