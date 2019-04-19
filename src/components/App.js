import React, { lazy, Suspense } from 'react'

const Hello = lazy(() => import('./Hello'))

const style = {
  width: '100%',
  height: '100px',
  lineHeight: '100px',
  textAlign: 'center',
}

export default function App() {
  return (
    <div style={style}>
      <Suspense fallback={<p style={{ color: 'gray', fontSize: '40px' }}>loading...</p>}>
        <Hello />
      </Suspense>
    </div>
  )
}
