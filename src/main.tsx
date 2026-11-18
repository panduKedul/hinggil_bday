import { createRoot } from 'react-dom/client'
import App from './App'
import SuratPage from './Surat'
import './styles.css'

// Satu domain, dua tampilan: QR 1 -> "/", QR 2 -> "/surat"
const path = window.location.pathname.replace(/\/+$/, '') || '/'
const Page = path === '/surat' ? SuratPage : App

createRoot(document.getElementById('root')!).render(<Page />)
