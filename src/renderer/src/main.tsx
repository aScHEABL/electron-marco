import { MantineProvider } from '@mantine/core'
import './assets/main.css'
import '@mantine/core/styles.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme='dark'>
      <App />
    </MantineProvider>
  </React.StrictMode>
)
