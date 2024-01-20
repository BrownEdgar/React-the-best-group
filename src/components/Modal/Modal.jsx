import { useEffect } from 'react'
import './Modal.scss'
import PropTypes from 'prop-types';


export default function Modal(toggleModal) {
  useEffect(() => {
    const handeleClick = (e) => {
      console.log(525)
      const { className } = e.target;
      if (className === 'Modal') {
        toggleModal()
      }
    }

    window.addEventListener('click', handeleClick);
    return () => {

      window.removeEventListener('click', handeleClick)
    }
  }, [toggleModal])



  return (
    <div className='Modal'>
      <div className='Modal__Content'>
        <h1>Exit</h1>
        <span className='x' onClick={toggleModal}><i className='bx bxs-message-x'></i></span>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident quod optio consectetur. Quibusdam, quo? Alias quibusdam facilis vitae, dicta iste, officia dignissimos mollitia modi sed quisquam cupiditate veniam sapiente voluptas?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem dicta libero cupiditate accusantium itaque quia corporis, quo labore asperiores placeat ad similique reiciendis optio enim. Dolores rem distinctio nesciunt ducimus!</p>


      </div>
    </div>
  )
}
Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired
}

