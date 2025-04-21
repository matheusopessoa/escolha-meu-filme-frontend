import React from 'react';
import { Analytics } from "@vercel/analytics/react";
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
