import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
// import Hello from './components/Hello.tsx'
// import Name from './components/Name'
// import Message from './components/Message'
// import ContainerSample from './components/ContainerSample'
// import ContextSample from './components/ContextSample'
// import UseStateSample from './components/UseStateSample'
import UseReducerSample from './components/UseReducerSample'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <UseReducerSample initialValue={0} />
  </StrictMode>,
)
