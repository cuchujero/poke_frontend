import './App.css'
import PokemonList from './components/PokemonList/PokemonList'

function App() {

  return (
  <div className="main-background">
    <div className="half-square top-left-half-square"></div>
    <div className="half-square top-right-half-square"></div>
    <PokemonList/>
    <div className="quarter-circle bottom-left-circle"></div>
    <div className="quarter-circle bottom-right-circle"></div>
  </div>
  )
}

export default App
