import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import UpsellPage from './components/UpsellPage.jsx'
import MentorshipPage from './components/MentorshipPage.jsx'
import './index.css'

const path = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {path === '/oferta-clube' ? <UpsellPage /> : 
     path === '/formacao-presencial' ? <MentorshipPage /> : 
     <App />}
  </React.StrictMode>,
)
