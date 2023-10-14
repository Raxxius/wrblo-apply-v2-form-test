import logo from "../assets/WRBLO_logo-removebg-preview.png";

export default function Header() {
  return (
    <div className="main-header">
      <div className="header-wrapper">
        <img src={logo} alt="WRLBO logo" className="header-image" />
        <h1 className="header-title">Quick Apply</h1>
        <a href="www.wrblo.org" className="header-links">
          Back to WRBLO website &nbsp;&nbsp;{"\u2192"}
        </a>
      </div>
    </div>
  );
}
