import { useEffect } from 'react'
import './Modal.scss'
import PropTypes from 'prop-types'

export default function Modal({ toggleModal, children, theme }) {
  console.log(children)

  useEffect(() => {
    const handleClick = (e) => {
      const { className } = e.target;
      if (className === 'Modal') {
        toggleModal()
      }
    }
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [toggleModal])



  return (
    <div className='Modal'>
      <div className={`Modal__Content Modal__Content-${theme}`}>
        {children}
      </div>
    </div>
  )
}

Modal.defaultProps = {
  theme: 'dark'
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
  theme: PropTypes.oneOf(['light', 'dark'])
}
