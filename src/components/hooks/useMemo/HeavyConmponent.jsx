export default function HeavyConmponent({ number, changeNumber }) {
  console.log("HeavyConmponent run")
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum += i
  }

  return (
    <div>
      <h1>Total: {sum}</h1>
      <button onClick={changeNumber}>change Number</button>
    </div>
  )
}
