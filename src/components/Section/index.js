import About from "./About";
import Portfolio from "./Portfolio";

const sections = {
  about: About,
  portfolio: Portfolio,
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
