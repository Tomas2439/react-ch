import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar'

function App() {
  return(
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Neco Ecommerce"}/>
      <ItemDetailContainer/>
    </div>
  )
}

export default App
