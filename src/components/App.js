import React, { lazy, Suspense } from 'react'

const Hello = lazy(() => import('./Hello'))

const style = {
  width: '100%',
  height: '100px',
  lineHeight: '100px',
  textAlign: 'center',
}
const Loading = () => (
  <p style={{ color: 'gray', fontSize: '40px' }}>
    loading...
  </p>
)

export default function App() {
  return (
    <div style={style}>
      <Suspense fallback={<Loading />}>
        <Hello />
      </Suspense>
    </div>
  )
}
