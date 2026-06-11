import { createBrowserRouter, Navigate } from 'react-router-dom'

import { Layout } from '@/components/Layout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        lazy: async () => ({ Component: (await import('@/pages/Home')).Home }),
      },
      {
        path: 'cv',
        lazy: async () => ({ Component: (await import('@/pages/CV')).CV }),
      },
      {
        path: 'projects',
        lazy: async () => ({
          Component: (await import('@/pages/Projects')).Projects,
        }),
      },
      { path: '*', element: <Navigate to='/' replace /> },
    ],
  },
])
