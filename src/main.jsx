 import React from 'react'
        import ReactDOM from 'react-dom/client'
        import App from './App.jsx'
        import './Styles/global.css' // Make sure to import global styles

        ReactDOM.createRoot(document.getElementById('root')).render(
          <React.StrictMode>
            <App />
          </React.StrictMode>,
        )