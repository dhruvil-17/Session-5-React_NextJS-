'use client';
import "./globals.css";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { store } from '@/store/store';
import { useState } from 'react';

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className="antialiased">
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            {children}
          </QueryClientProvider>
        </Provider>
      </body>
    </html>
  );
}
