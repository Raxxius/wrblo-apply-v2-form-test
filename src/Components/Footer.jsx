import Instagram from "../assets/instagram"
import Facebook from "../assets/facebook-f"
import Twitter from "../assets/twitter"
import Youtube from "../assets/youtube"

const Main = () => {
  return (
    <div className="footer-main-grid">
      <div className="footer-about">
        <h1 className="footer-header">About Us</h1>
        <p className="footer-text">
          WRBLO was founded to financially support unsung charitable
          organisations that are innovatively relieving poverty; advancing
          healthcare; and providing education at ground zero of poverty.
        </p>
        <div className="footer-socials">
          <a href="https://www.instagram.com/wrblo_/" target="_blank" rel="noreferrer" className="footer-icon"><Instagram /></a>
          <a href="https://twitter.com/wrblo" target="_blank" rel="noreferrer" className="footer-icon"><Twitter /></a>
          <a href="https://www.facebook.com/wrblo.org" target="_blank" rel="noreferrer" className="footer-icon"><Facebook /></a>
          <a href="https://www.youtube.com/channel/UCXCKEOu2x_asMl_okd808SQ" target="_blank" rel="noreferrer" className="footer-icon"><Youtube /></a>
        </div>
      </div>
      <div className="footer-latest"></div>
      <div className="footer-twitter-feed"></div>
    </div>
  );
};

const Tail = () => {
  return (
    <div className="footer-tail">
      <div className="footer-links">
        <a href="https://wrblo.org/wrblo-code-of-conduct/">Code of Conduct</a>&nbsp;&nbsp;&nbsp;
        <a href="https://wrblo.org/privacy-policy/">Privacy Policy</a>
      </div>
      <div className="footer-text">
        <span>&copy;</span>2023 All rights reserved
      </div>
      <div className="footer-text footer-trademark">
        <a href="https://wrblo.org/trademarks/">Trademarks</a>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <Main />
        <hr />
        <Tail />
      </div>
    </footer>
  );
}
