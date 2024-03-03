import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ThemeConfig } from './config/theme.config.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'



const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ReactQueryDevtools />
      <Provider store={store}>
        <ThemeConfig>
          <App />
        </ThemeConfig>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
);
