import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import Hello from './components/Hello.tsx'
// import Name from './components/Name'
// import Message from './components/Message'
import ContainerSample from './components/ContainerSample'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <ContainerSample />
  </StrictMode>,
)
