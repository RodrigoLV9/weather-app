
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContextPlace } from './components/Context/ContextPlace.tsx'
createRoot(document.getElementById('root')!).render(
    <ContextPlace>
        <App />
    </ContextPlace> 
    
)
