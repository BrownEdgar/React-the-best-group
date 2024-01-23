import './Characters.scss'
import { nanoid } from 'nanoid'
import { useState, } from 'react'
import Modal from '../Modal/Modal'
export default function Characters({ toggleModal, isOpen }) {
  const [characters, setCharacters] = useState([
    {
      id: nanoid(6),
      name: 'Iron Man',
      img: 'https://ew.com/thmb/FQP-oPEWQaOKVcxu2qzRT_w2pOc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/iron-man-3-review-2000-fce31766d0d443abbdda68d577d5f5d6.jpg'
    },
    {
      id: nanoid(6),
      name: 'Captain America',
      img: 'https://www.usatoday.com/gcdn/presto/2019/04/24/USAT/bdc68f96-f162-4ec2-867d-e8284b87633f-c01_tweet_evans_1013.jpg?crop=2000,1331,x0,y0&width=1200&disable=upscale&format=pjpg&auto=webp'
    },
    {
      id: nanoid(6),
      name: 'Spider Man',
      img: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/08/Spider-Man-No-Way-Home---Peter-Shocked.jpg'
    },
    {
      id: nanoid(6),
      name: 'Scarlet Witch',
      img: 'https://media.glamour.com/photos/603979401f89f5366653e62a/1:1/w_2159,h_2159,c_limit/HAM1280_106_comp_v020_20210112_r709.1065.jpg'
    },
    {
      id: nanoid(6),
      name: 'Thor',
      img: 'https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg'
    },
    {
      id: nanoid(6),
      name: 'Black Panther',
      img: 'https://media1.popsugar-assets.com/files/thumbor/JOQRd9dk0ipRUxmxaIXeUudQkf4=/3300x2200/top/filters:format_auto():quality(85):extract_cover()/2022/11/11/754/n/1922283/tmp_znCA1a_efc099d86a17cc87_MCDBLPA_EC105.jpg'
    },
  ])
  const [currentId, setCurrentId] = useState(null);

  const deleteCharacter = () => {
    setCharacters(characters.filter(character => character.id !== currentId));
    setCurrentId(null);
    toggleModal()
  }
  return (
    <>
      {isOpen
        ? <Modal toggleModal={toggleModal} isOpen={isOpen}>
          <h2>Do you want to snap?</h2>
          <div className="Modal__buttons">
            <button onClick={toggleModal}>Pity</button>
            <button onClick={deleteCharacter}>Snap</button>
          </div>
        </Modal>
        : null
      }
      <div className="Characters">
        {characters.length > 0
          ? characters.map(character => {
            return (
              <div className="Characters__card" key={character.id}>
                <img className='Characters__image' src={character.img} alt={character.name} />
                <div className="Characters__content">
                  <h2>{character.name}</h2>
                  <img
                    className='Characters__delete'
                    onClick={() => {
                      toggleModal();
                      setCurrentId(character.id);
                    }}
                    src="https://i.pinimg.com/originals/90/c9/9d/90c99dc3837828d9f2053d3e6757c8f9.png" />
                </div>
              </div>
            )
          })
          : <div className="Characters__thanos">
            <img src="https://f8n-ipfs-production.imgix.net/QmNQguXHVJnxWQG6A332UxUmGcoBpVAgJu19dpxCsBUSJZ/nft.jpg?q=80&auto=format%2Ccompress&cs=srgb&w=3000&h=3000&fit=max" />
          </div>
        }
      </div>
    </>

  )
}
