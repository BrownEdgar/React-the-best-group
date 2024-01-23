import { useState } from 'react';

export default function useRandom({ count, type, letter }) {
  const [data, setData] = useState([]);

  if (type === 'number') {
    if (data.length !== count) {
      setData(prevData => [...prevData, Math.round(Math.random() * 1000)]);
    }
  } else if (type === 'string') {
    if (data.length !== count) {
      const randomLetter = (letter === 'upper')
        ? String.fromCharCode(65 + Math.floor(Math.random() * 26))
        : String.fromCharCode(97 + Math.floor(Math.random() * 26));

      setData(prevData => [...prevData, randomLetter]);
    }
  }
  return data;
}
