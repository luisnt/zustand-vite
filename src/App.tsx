import './App.css'
import { AvailableProducts } from './components/AvailableProducts'
import { Cart } from './components/Cart'

function App() {
  return (
    <div className='container'>
      <AvailableProducts />
      <Cart />
    </div>
  )
}

export default App
