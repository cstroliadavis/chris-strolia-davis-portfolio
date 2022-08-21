import loading from '../../../assets/img/loading-gif.gif';
import './Portfolio.css';
import { useEffect, useState } from "react";
import AppCard from '../../AppCard';
import { getAllApplications } from '../../../services/applications.repository';

export default function Portfolio() {
  const [ isLoading, setIsLoading ] = useState(false);
  const [ applications, setApplications ] = useState([]);
  const [ errors, setErrors ] = useState(null);

  useEffect(() => {
    setIsLoading(true);

    getAllApplications()
      .then((appData) => setApplications(appData))
      .catch(setErrors)
      .finally(() => setIsLoading(false))

    return () => {
    };
  }, []);

  return (
    <div className="container">
      {
        isLoading
          ? <img alt="Loading" src={ loading }/>
          :errors
            ? <div className="error">There was an issue loading data. Please try again</div>
            :<div className="app-list">
              { applications.map(app => (<AppCard { ...app } key={ app.id }/>)) }
            </div>
      }
    </div>
  );
}
