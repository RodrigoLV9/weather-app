import './App.css'
import { Header } from './components/Header/Header'
import {Search} from './components/Search'
import {WeatherCard} from './components/WeatherCard/WeatherCard'
function App() {

  return (
    <>
      <Header/>
      <Search/>
      <WeatherCard/>
    </>
  )
}

export default App
