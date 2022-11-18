export default function Footer() {
  return (
    <div className="footer">
      <div className="grid__container--footer">
        <span className="footer__statement">We help all traders become profitable and consistent
          traders in the stock market.</span>
        <div className="copyright">
          <span className="footer__logo">LOGO Stock Method</span>
          <span className="footer__copyright">Copyright © 2022 Stock Method</span>
        </div>
        <div className="explore">
          <ul className="explore__list">
            <li className="footer__h">Explore</li>
            <li className="explore__list--item">Home</li>
            <li className="explore__list--item">Learn</li>
            <li className="explore__list--item">About</li>
            <li className="explore__list--item">Community</li>
          </ul>
        </div>
        <div className="legal">
          <ul className="legal__list">
            <li className="footer__h">Legal</li>
            <li className="legal__list--item">Contact</li>
            <li className="legal__list--item">Privacy</li>
            <li className="legal__list--item">Terms and Conditions</li>
            <li className="legal__list--item">Refund Policy</li>
          </ul>
        </div>
        <div className="social">
          <ul className="social__list">
            <li className="footer__h">Follow</li>
            <li className="social__list--item">X Instagram</li>
            <li className="social__list--item">X Youtube</li>
            <li className="social__list--item">X Discord</li>
          </ul>
        </div>
        <span className="footer__authors">Design and Development by Martina Molnar and Luka Matić</span>
      </div>
    </div>
  );
}
