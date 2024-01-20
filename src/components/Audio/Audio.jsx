import './Audio.scss'
import creepy from './creepy.mp3';
export default function Audio() {
  return(
    <div className='audio'>
      <audio src={creepy} controls autoPlay></audio>
    </div>

  )
    
 }


