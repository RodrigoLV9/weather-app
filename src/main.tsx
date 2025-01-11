
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ContextPlace } from './components/Context/ContextPlace.tsx'
import { ContextLanguage } from './components/Context/ContextLanguage.tsx'
createRoot(document.getElementById('root')!).render(
    <ContextLanguage>
        <ContextPlace>
            <App />
        </ContextPlace> 
    </ContextLanguage>
    
    
)
