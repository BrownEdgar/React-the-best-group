import { useState } from "react";
export default function useRandom({ count, type, letter }) {
    const [data, setData] = useState([]);
    if (type === 'number') {
        if (count !== data.length) {
            setData(prevData => [...prevData, Math.floor(Math.random() * 1000)])
        }
    } else if (type === 'string') {
        if (count !== data.length) {
            const randomLetter = (letter === 'upper')
                ? String.fromCharCode(65 + Math.floor(Math.random() * 26))
                : String.fromCharCode(97 + Math.floor(Math.random() * 26));
                setData(prevData => [...prevData,randomLetter]);
        }
    }
    return data;

}