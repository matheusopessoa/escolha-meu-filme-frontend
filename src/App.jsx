import React, { Suspense, lazy } from 'react';
import { Analytics } from "@vercel/analytics/react";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import CookieConsent from './components/CookieConsent';
import './App.css';

// Carregamento de componentes de forma lazy para melhorar a performance
const ErrorBoundary = lazy(() => import('./components/ErrorBoundary'));

export default function App() {
  return (
    <>
      <Suspense fallback={<div className="loading-screen">Carregando...</div>}>
        <ErrorBoundary>
          <RouterProvider router={router} />
          <CookieConsent />
          <Analytics />
        </ErrorBoundary>
      </Suspense>
    </>
  );
}
