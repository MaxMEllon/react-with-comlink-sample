import React, { useState } from 'react'
import { proxy } from 'comlinkjs'

const HelloWorker = proxy(new Worker('./worker.js'))

function Hello({ content, setContent }) {
  if (!content) {
    throw (async () => {
      const instance = await new HelloWorker()
      const content = await instance.greet()
      setContent(content)
    })()
  }
  return <p style={{ fontSize: '40px' }}>{content}</p>
}

export default function HelloWrapper() {
  const [content, setContent] = useState(null)
  return <Hello content={content} setContent={setContent} />
}
