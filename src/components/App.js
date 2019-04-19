import React, { lazy, Suspense } from 'react'

const Hello = lazy(() => import('./Hello'))

export default function App() {
  return (
    <div style={{ width: '100%', height: '100px' }}>
      <Suspense fallback={<p>loading...</p>}>
        <Hello />
      </Suspense>
    </div>
  )
}
