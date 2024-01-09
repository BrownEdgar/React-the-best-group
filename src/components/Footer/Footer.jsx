import './Footer.scss'

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer__box">
        <h3>OUR ADRESS</h3>
        <p>1441 Gardiner Ln, Louisville, KY 40213</p>
      </div>
      <div className="Footer__box">
        <h3>CONTACT INFORMATION</h3>
        <p>contact@mec.com +374 91-185-496</p>
      </div>
      <div className="Footer__box">
        <h3>SOCIALS</h3>
        <ul>
          <li><a href=""><i className="bi bi-facebook"></i></a></li>
          <li><a href=""><i className="bi bi-instagram"></i></a></li>
          <li><a href=""><i className="bi bi-twitter"></i></a></li>
        </ul>
      </div>
    </div>
  )
}