import './Footer.scss'
export default function Footer() {
  return (
    <div className="Footer">
      <div class="Footer__box">
                <h3>OUR ADRESS</h3>
                <p>Hogwarts,London</p>
            </div>
            <div class="Footer__box">
                <h3>CONTACT INFORMATION</h3>
                <p>contact@Avadakedavra.com +374 91-185-496</p>
            </div>
            <div class="Footer__box">
                <h3>SOCIALS</h3>
                <ul>
                    <li><a href=""><i class="bi bi-facebook"></i></a></li>
                    <li><a href=""><i class="bi bi-instagram"></i></a></li>
                    <li><a href=""><i class="bi bi-twitter"></i></a></li>
                </ul>
            </div>
    </div>
  )
}