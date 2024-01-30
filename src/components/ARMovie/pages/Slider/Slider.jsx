import { useEffect, useState } from 'react'
import './Slider.scss'

export default function Slider({ images }) {

  const [currentImage, setCurrentImage] = useState(0);

  const nextSlide = () => {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1)
  }
  const prevSlide = () => {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1)
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImage]);

  return (
    <div className="Slider">
      <i className="bi bi-chevron-double-left Slider__button Slider__button-left" onClick={prevSlide}></i>
      <img src={images[currentImage]} alt="" />
      <i className="bi bi-chevron-double-right Slider__button Slider__button-right" onClick={nextSlide}></i>
    </div>
  )
}
