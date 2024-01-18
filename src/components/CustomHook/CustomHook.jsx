import useRandom from './useRandom'

export default function CustomHook() {
  const array = useRandom(12, "number", 'upper');
  return (
    <div>
      <h2>The array is: {JSON.stringify(array)}</h2>
    </div>
  )
}
