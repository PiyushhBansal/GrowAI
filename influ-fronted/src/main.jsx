import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <GoogleOAuthProvider clientId="108990540832-c19bi5os93ese2glrobk38jb28ku9936.apps.googleusercontent.com">
    <App />
   </GoogleOAuthProvider>;
  </StrictMode>,
)
