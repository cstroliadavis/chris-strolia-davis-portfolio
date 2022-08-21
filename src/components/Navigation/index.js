import { firstCap } from "../../utils/string-helpers";

export default function Navigation({ currentSection, setCurrentSection, sections }) {
  const vm = {
    menuItems: sections.map((section) => ({
      ...section,
      ref: 'about' === section.name ? '#' : `#${firstCap(section.name)}`,
      key: section.name,
      onClick: () => {
        setCurrentSection(section)
      },
      selected: currentSection.name === section.name ? 'selected' : null,
    })),
  }

  return (
    <nav className="nav-bar">
      <div className="portfolio-owner">Chris Strolia-Davis</div>
      <div className="view-nav-toggle">
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      <div className="menu-items">
        <ul>
          {
            vm.menuItems.map((item) => (
              <li className={item.selected} key={item.key}>
                <a href={ item.ref } onClick={item.onClick}>{ item.title }</a>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>
  );
}
