import './App.css'
import { Header } from './components/Header/Header'
import {Search} from './components/Search'
import {WeatherCard} from './components/WeatherCard/WeatherCard'
import {Daily} from './components/Daily/Daily'
import {Footer} from './components/Footer'
function App() {

  return (
    <>
      <Header/>
      <Search/>
      <WeatherCard/>
      <Daily/>
      <Footer/>
    </>
  )
}

export default App
