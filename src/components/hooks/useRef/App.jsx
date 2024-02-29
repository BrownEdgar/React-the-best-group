import React, { useEffect, useRef, useState } from 'react'

export default function App() {

  const [value, setvalue] = useState('');

  //  {current: <input />}
  const inputRef = useRef(null)
  const emailRef = useRef(null)
  const divRef = useRef(null)

  useEffect(() => {
    console.log('arr is changed')
    divRef.current.classList.add('selected')
  }, [])


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('ok')
    setvalue(inputRef.current.value);
    e.target.reset()
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])
  const handleChange = (e) => {
    e.preventDefault();
    const { key } = e;

    if (key === 'Enter') {
      emailRef.current.focus()
    }
  }
  return (
    <div ref={divRef}>
      <h1>Hook use ref: {value}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef}
          onKeyUp={handleChange}
          value={value}
          onChange={(e) => setvalue(e.target.value)}

        />
        <input type="email" ref={emailRef} />
        <input type="submit" value="save" />
      </form>
    </div>
  )
}
