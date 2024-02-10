import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import { useEffect } from 'react';
import { getAllAnimals, getAnimalsAsync } from './features/animals/animalsSlice';
import Slider from "react-slick";

function App() {
  const animals = useSelector(getAllAnimals);
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAnimalsAsync())
  }, [dispatch]);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    focusOnSelect: true,
  };


  return (
    <div className="App">
      <div className="slider-container">
        <Slider {...settings}>
          {
            animals.map(animal => {
              return <div className="animal" key={animal.id}>
                <img src={animal.img} alt={animal.name} />
                <div className="animal__content">
                  <h2>{animal.name}</h2>
                  <p>{animal.desc}</p>
                </div>
              </div>
            })
          }
        </Slider>
      </div>
    </div>
  )
}

export default App
