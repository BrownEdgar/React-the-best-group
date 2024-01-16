import React, { useState } from 'react'

export default function useCount({ initialValue, min, max }) {
  const [value, setValue] = useState(initialValue);
  const plus = () => setValue(value == max ? value : value + 1)
  const minus = () => setValue(value > min ? value - 1 : value)
  const reset = () => setValue(initialValue)
  return [value, { minus, plus, reset }]
}
