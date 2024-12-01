import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store}>

    <App />
  </Provider>
  </StrictMode>,
)
