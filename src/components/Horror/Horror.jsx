import Modal from "../Modal/Modal"
import "./Horror.scss"
import { useState } from "react"
export default function Horror({ toggleModal, isOpen }) {
    const [witches, setWitches] = useState([
        {
            id: 1,
            name: 'Anabelle',
            img: 'https://www.usatoday.com/gcdn/-mm-/59592d64ae2d6609cda291fbddb27d75d610e315/c=0-19-1339-1358/local/-/media/2017/08/06/USATODAY/USATODAY/636375748745443454-XXX-ANNABELLE-MOV-JY-2961--67725108.JPG',
            info: 'The real Annabelle doll lives in a locked box at Warrens Occult Museum at her Monroe home. The doll in the movie is a frightening looking porcelain doll in a childs image'

        },
        {
            id: 2,
            name: 'Anna Hakobyan',
            img: 'https://i.pinimg.com/564x/42/56/ef/4256efb4acb3456efb40bf67e01b55d7.jpg',
            info: 'Anna Vachiki Hakobyan is an Armenian journalist and the wife of the current Prime Minister of Armenia, Nikol Pashinyan. She is the editor-in-chief of the Haykakan Zhamanak newspaper.'

        },
        {
            id: 3,
            name: 'Scream',
            img: 'https://people.com/thmb/zb9pb18cWVP2SJKjQ6LItJp24Sg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1099x78:1101x80)/Scream_03-1c6647feac364a8e89598b9fbb7897c8.jpg',
            info: 'When Sidney receives a mysterious phone call and finds that her friends are being killed, she suspects that a serial killer may be on the prowl'

        },
        {
            id: 4,
            name: 'Pennywhise',
            img: 'https://s.yimg.com/ny/api/res/1.2/XfVlBFKVUneGAKOvreBq_Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/total_film_411/7092acea42450f07c6978aa71420e48d',
            info: 't is the titular main antagonist in Stephen Kings 1986 horror novel It. The character is an ancient, shape-shifting, trans-dimensional evil entit'

        },
        {
            id: 5,
            name: 'Conjuring',
            img: 'https://www.denofgeek.com/wp-content/uploads/2021/02/Valak-as-the-Nun-in-The-Conjuring-Movies.png?fit=1200%2C708',
            info: 'The Conjuring was released in the United States and Canada on July 19, 2013, by Warner Bros. Pictures and New Line Cinema.'
        },
        {
            id: 6,
            name: 'Astral',
            img: 'https://cdn.vox-cdn.com/thumbor/DUkTqae3zDgnWPA-w3MPTR1IVgg=/0x0:2000x1125/1200x0/filters:focal(0x0:2000x1125):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24775552/images_8.fill.size_2000x1125.v1688071111.jpg',
            info: 'Storyline. The film stars Frank Dillane (Fear The Walking Dead), Vanessa Grasse (Leatherface) and Damson Idris (Farming)'

        },
    ])
    const [currentInfo, setCurrentInfo] = useState(null)
    const deleteWitches = () => {
        setWitches(witches.filter(witch => witch.info !== currentInfo));
        setCurrentInfo(null);
        toggleModal();
    }
    return (
        <>
            {isOpen
                ? <Modal toggleModal={toggleModal} isOpen={isOpen}>
                    <h2>Terrible Information</h2>
                    <p>{currentInfo}</p>
                    <div className="Modal__buttons">
                        <button onClick={toggleModal}>Close</button>
                        <button onClick={deleteWitches}>Delete</button>
                    </div>

                </Modal>
                : null
            }

            <div className="Horror">
                {
                    witches.length > 0 ? 
                    witches.map(witch => {
                        return (
                            <div className="Horror__witch" key={witch.id}>
                                <img src={witch.img} />
                                <div className="Horror__content">
                                    <h2>{witch.name}</h2>
                                    <img onClick={() => {
                                        toggleModal();
                                        setCurrentInfo(witch.info)
                                    }
                                    } src="https://www.onlygfx.com/wp-content/uploads/2016/11/bloody-handprint-4.png" />
                                </div>
                            </div>
                        )
                    }) 
                    : <div className="Horror__Micky">
                    <img src="https://www.rollingstone.com/wp-content/uploads/2024/01/Mickey-public-domain-horror.jpg?w=1581&h=1054&crop=1"/>
                    </div>        
                }
            </div>
        </>
    )
}
