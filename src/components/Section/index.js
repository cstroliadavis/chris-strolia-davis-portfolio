import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Resume from './Resume';

const sections = {
  about: About,
  portfolio: Portfolio,
  contact: Contact,
  resume: Resume,
}

export default function Section({ currentSection }) {
  function Default() {
    return (<>{ currentSection.title }</>);
  }

  const View = sections[currentSection.name] ?? Default;

  return (
    <main className={ `section ${ currentSection.name }` }>
      <View/>
    </main>
  );
}
