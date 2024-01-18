import { useEffect, useState } from 'react';

export default function useRandom(count, type, font) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getRandomLetters = (quantity) => {
      const arr = [];
      for (let i = 0; i < quantity; i++) {
        const random = Math.round(Math.random() * (122 - 97) + 97);
        const letter = String.fromCharCode(random);
        arr.push(letter)
      }
      return font === 'lower' ? arr : arr.map(elem => elem.toUpperCase())
    }

    const getRandomNumbers = (quantity) => {
      return Array(quantity).fill().map(() => Math.floor(Math.random() * 1001))
    }

    if (type === 'string') {
      setData(getRandomLetters(count))
    } else if (type === 'number') {
      setData(getRandomNumbers(count))
    }
  }, [count, type, font])


  return data
}