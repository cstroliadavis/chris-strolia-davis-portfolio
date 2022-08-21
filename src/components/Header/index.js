export default function Header() {
  return (
    <header>
      <nav className="nav-bar">
        <div className="portfolio-owner">Chris Strolia-Davis</div>
        <div className="view-nav-toggle">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        <div className="menu-items">
          <ul>
            <li><a href="#">About me</a></li>
            <li><a href="#Portfolio">Portfolio</a></li>
            <li><a href="#Contact">Contact</a></li>
            <li><a href="#Resume">Résumé</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
