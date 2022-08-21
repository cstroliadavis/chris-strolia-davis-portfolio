import './AppCard.css';

export default function AppCard(props) {
  const {
    description,
    github,
    image,
    title,
    url,
  } = props;

  return (
    <div className="app-card">
      <h1 className="title">{ title }</h1>
      <div className="app-ref">
        <a href={ url } target="_blank"><img src={ image } alt={ title }/></a>
      </div>
      <div className="repo"><a href={ github } target="_blank">See the code</a></div>
      <div className="app-description"><a href={ url } target="_blank">{ description }</a></div>
    </div>
  );
}
