
import { useState } from 'react'
import './App.css'
import Achivement from './Component/Achivement/Achivement'
import Banner from './Component/Banner/Banner'
import Carts from './Component/Carts/Carts'
import Navber from './Component/Navber/Navber'
import Products from './Component/Products/Products'
import Steps from './Component/Steps/Steps'
import Pakages from './Component/Pakages/Pakages'

const getProduct = async () => {
  const res = await fetch("/data.json")
  return res.json()
}

const productPromise = getProduct()

function App() {
 const [activeTab, setActiveTab] = useState("products")
 const [carts, setCarts] = useState([])


  return (
    <>
      <Navber carts={carts}/>
      <Banner/>
      <Achivement/>
        
       {activeTab === "products" && <Products productPromise={productPromise} activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} setCarts={setCarts} />}
       {activeTab === "cart" && <Carts activeTab={activeTab} setActiveTab={setActiveTab} carts={carts} setCarts={setCarts}  />}
       <Steps/>
       <Pakages/>
    </>
  )
}

export default App
