import React, { useState } from 'react'

function Hello({ content, setContent }) {
  if (!content) {
    throw new Promise(resolve => {
      setTimeout(() => {
        setContent('hello, world')
        resolve()
      }, 1000)
    })
  }
  return (
    <p>{content}</p>
  )
}

export default function HelloWrapper() {
  const [content, setContent] = useState(null)
  return <Hello content={content} setContent={setContent} />
}
