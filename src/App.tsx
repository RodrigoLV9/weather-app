import './App.css'
import { Header } from './components/Header/Header'
import {Search} from './components/Search'
import {WeatherCard} from './components/WeatherCard/WeatherCard'
import {Daily} from './components/Daily/Daily'
function App() {

  return (
    <>
      <Header/>
      <Search/>
      <WeatherCard/>
      <Daily/>
    </>
  )
}

export default App
