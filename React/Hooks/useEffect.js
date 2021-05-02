import React, { useState, useEffect } from 'react'
const AsyncPage = () => {
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 5000)
  })
  return (
    loading ? <p>Loading...</p> : <p>异步请求完成</p>
  )
}

export default AsyncPage;

import React, { useState, useEffect } from 'react'

const AsyncPage = ({ name }) => {
  const [loading, setLoading] = useState(true)
  const [person, setPerson] = useState({})

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setPerson({ name })
    }, 2000)
  }, [name])
  return (
    <>
      {loading ? <p>Loading...</p> : <p>{person.name}</p>}
    </>
  )
}

const PersonPage = () => {
  const [state, setState] = useState('')
  const changeName = (name) => {
    setState(name)
  }
  return (
    <>
      <AsyncPage name={state} />
      <button onClick={() => { changeName('名字1') }}>名字1</button>
      <button onClick={() => { changeName('名字2') }}>名字2</button>
    </>
  )
}

export default PersonPage