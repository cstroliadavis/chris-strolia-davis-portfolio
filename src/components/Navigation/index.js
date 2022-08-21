import { firstCap } from "../../utils/string-helpers";
import { useState } from "react";

export default function Navigation({ currentSection, setCurrentSection, sections }) {
  const [ menuOpen, setMenuOpen ] = useState(false);
  const vm = {
    menuToggle: () => setMenuOpen(!menuOpen),
    menuVisible: menuOpen ? 'menu-visible' : '',
    menuItems: sections.map((section) => ({
      ...section,
      ref: 'about'===section.name ? '#':`#${ firstCap(section.name) }`,
      key: section.name,
      onClick: () => {
        setCurrentSection(section)
      },
      selected: currentSection.name===section.name ? 'selected':null,
    })),
  }

  return (
    <nav className={ `nav-bar ${ vm.menuVisible }` }>
      <div className="portfolio-owner">Chris Strolia-Davis</div>
      <div className="view-nav-toggle" onClick={ vm.menuToggle }>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className="menu-items">
        <ul>
          {
            vm.menuItems.map((item) => (
              <li className={ item.selected } key={ item.key }>
                <a href={ item.ref } onClick={ item.onClick }>{ item.title }</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
