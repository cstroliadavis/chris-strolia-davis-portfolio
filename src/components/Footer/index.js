import './Footer.css'
import githubLogo from '../../assets/img/GitHub-Mark-120px-plus.png';
import linkedInLogo from '../../assets/img/In-Blue-128.png';
import mediumLogo from '../../assets/img/Medium-Symbol-Black-RGB@1x.png';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <a href="https://github.com/cstroliadavis" target="github">
          <img src={ githubLogo } alt="Github Profile"/>
        </a>
        <a href="https://www.linkedin.com/in/cstroliadavis/" target="linkedin">
          <img src={ linkedInLogo } alt="Linked in Profile"/>
        </a>
        <a href="https://medium.com/@cstroliadavis" target="medium">
          <img src={ mediumLogo } alt="Medium Profile"/>
        </a>
      </div>
    </footer>
  );
}
