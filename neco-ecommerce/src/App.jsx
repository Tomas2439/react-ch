import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
function App() {
  return(
    <div className='App'>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenido a Neco Ecommerce"}/>
      <ItemCount initial = {1} stock={8} onAdd={(quantity) => console.log('Cantidad Agregada: ',quantity)}/>
    </div>
  )
}

export default App
