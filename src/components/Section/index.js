import About from "./About";

const sections = {
  about: About
}

export default function Section({ currentSection }) {
  function Default() {
    return (<>{ currentSection.title }</>);
  }

  const View = sections[currentSection.name] ?? Default;

  return (
    <main className={`section ${currentSection.name}`}>
      <View />
    </main>
  );
}
