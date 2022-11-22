import logo from "../images/Logo.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__grid-container">
        <span className="footer__statement grid-span-12">We help all traders become profitable and consistent traders in the stock market.</span>
        <div className="footer__column grid-span-6 flex-column">
          <img src={logo} className="footer__logo-image" alt="logo"></img>
          <span className="footer__copyright">Copyright © 2022 Stock Method</span>
        </div>
        <div className="footer__column grid-span-2">
          <ul className="footer__list">
            <li className="footer__item-heading">Explore</li>
            <li className="footer__item">Home</li>
            <li className="footer__item">Learn</li>
            <li className="footer__item">About</li>
            <li className="footer__item">Community</li>
          </ul>
        </div>
        <div className="footer__column grid-span-2">
          <ul className="footer__list">
            <li className="footer__item-heading">Legal</li>
            <li className="footer__item">Contact</li>
            <li className="footer__item">Privacy</li>
            <li className="footer__item">Terms and Conditions</li>
            <li className="footer__item">Refund Policy</li>
          </ul>
        </div>
        <div className="footer__column grid-span-2">
          <ul className="footer__list">
            <li className="footer__item-heading">Follow</li>
            <li className="footer__item">X Instagram</li>
            <li className="footer__item">X Youtube</li>
            <li className="footer__item">X Discord</li>
          </ul>
        </div>
        <span className="footer__authors grid-span-6">
          Design and Development by <span className="color-light">Martina Molnar</span> and <span className="color-light">Luka Matić</span>
        </span>
      </div>
    </div>
  );
}
