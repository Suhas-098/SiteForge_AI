import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react'



createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ClerkProvider publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      signInUrl="/sign-in"
      signUpUrl="/sign-up"
      afterSignInUrl="/"
      afterSignUpUrl="/">
      <App />
    </ClerkProvider>
  </BrowserRouter>,
)
