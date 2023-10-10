const AboutUs = () => {
  return <div className="footer-about">About Us</div>;
};

const Tail = () => {
  return (
    <div className="footer-tail">
      <div className="footer-links">
        <a href="">Code of Conduct</a>&nbsp; &nbsp;&nbsp;
        <a href="https://wrblo.org/privacy-policy/">Privacy Policy</a>
      </div>
      <div className="footer-text">
        <span>&copy;</span>2023 All rights reserved
      </div>
      <div className="footer-text">
        <a href="">Trademarks</a>
      </div>
    </div>
  );
};

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <AboutUs />
        <Tail />
      </div>
    </footer>
  );
}
