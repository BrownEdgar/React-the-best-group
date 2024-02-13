import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { getAllAnimals, getAsyncAnimals } from './features/animals/animalsSlice';
import Slider from "react-slick";

import './App.scss'

export default function App() {
  const dispatch = useDispatch()
  const { data, status } = useSelector(getAllAnimals)
  console.log(data)
  useEffect(() => {
    dispatch(getAsyncAnimals())
  }, [])
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
  }
  return (
    <div className='App'>
      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit fugit esse. Modi est quo quaerat cumque, atque deserunt fugit nulla minus veniam esse omnis a numquam ab architecto debitis natus quisquam voluptas corporis incidunt! Eligendi minima totam velit, deserunt architecto suscipit omnis a, in sint laboriosam autem voluptates eos? Architecto itaque expedita similique a possimus explicabo ducimus quae tempora.</p>
      </section>
      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit fugit esse. Modi est quo quaerat cumque, atque deserunt fugit nulla minus veniam esse omnis a numquam ab architecto debitis natus quisquam voluptas corporis incidunt! Eligendi minima totam velit, deserunt architecto suscipit omnis a, in sint laboriosam autem voluptates eos? Architecto itaque expedita similique a possimus explicabo ducimus quae tempora.</p>
      </section>
      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit fugit esse. Modi est quo quaerat cumque, atque deserunt fugit nulla minus veniam esse omnis a numquam ab architecto debitis natus quisquam voluptas corporis incidunt! Eligendi minima totam velit, deserunt architecto suscipit omnis a, in sint laboriosam autem voluptates eos? Architecto itaque expedita similique a possimus explicabo ducimus quae tempora.</p>
      </section>
      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit fugit esse. Modi est quo quaerat cumque, atque deserunt fugit nulla minus veniam esse omnis a numquam ab architecto debitis natus quisquam voluptas corporis incidunt! Eligendi minima totam velit, deserunt architecto suscipit omnis a, in sint laboriosam autem voluptates eos? Architecto itaque expedita similique a possimus explicabo ducimus quae tempora.</p>
      </section>
      <Slider {...settings}>
        {data.map(animal => {
          return (
            <div key={animal.id} className='Item'>
              <img src={animal.image} alt={animal.name} />
              <div className="Item__content">
                <h1>{animal.name}</h1>
                <p>{animal.desc}</p>
              </div>
            </div>
          )
        })}
      </Slider>

      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit fugit esse. Modi est quo quaerat cumque, atque deserunt fugit nulla minus veniam esse omnis a numquam ab architecto debitis natus quisquam voluptas corporis incidunt! Eligendi minima totam velit, deserunt architecto suscipit omnis a, in sint laboriosam autem voluptates eos? Architecto itaque expedita similique a possimus explicabo ducimus quae tempora.</p>
      </section>
      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit fugit esse. Modi est quo quaerat cumque, atque deserunt fugit nulla minus veniam esse omnis a numquam ab architecto debitis natus quisquam voluptas corporis incidunt! Eligendi minima totam velit, deserunt architecto suscipit omnis a, in sint laboriosam autem voluptates eos? Architecto itaque expedita similique a possimus explicabo ducimus quae tempora.</p>
      </section>
      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit fugit esse. Modi est quo quaerat cumque, atque deserunt fugit nulla minus veniam esse omnis a numquam ab architecto debitis natus quisquam voluptas corporis incidunt! Eligendi minima totam velit, deserunt architecto suscipit omnis a, in sint laboriosam autem voluptates eos? Architecto itaque expedita similique a possimus explicabo ducimus quae tempora.</p>
      </section>
      <section>
        <h2>Lorem ipsum dolor sit amet.</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur impedit fugit esse. Modi est quo quaerat cumque, atque deserunt fugit nulla minus veniam esse omnis a numquam ab architecto debitis natus quisquam voluptas corporis incidunt! Eligendi minima totam velit, deserunt architecto suscipit omnis a, in sint laboriosam autem voluptates eos? Architecto itaque expedita similique a possimus explicabo ducimus quae tempora.</p>
      </section>
    </div>
  )
}


