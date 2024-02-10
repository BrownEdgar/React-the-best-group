import './PictureSlider.scss'
import Slider from "react-slick";
import PropTypes from 'prop-types';

export default function PictureSlider({ images }) {

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="PictureSlider">
      <Slider {...settings}>
        {
          images.map((img, index) => {
            return <div className="item" key={index}>
              <img src={img} />
            </div>
          })
        }
      </Slider>
    </div>
  )
}

PictureSlider.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
}