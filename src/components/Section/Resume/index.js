import './Resume.css';

export default function Resume() {
  return (
    <div className="container">
      <h1>Résumé</h1>
      <a href="./Christopher-Strolia-Davis-Resume-online.pdf" className="download">
        <img src="./9-2-resume-picture.png" alt="Chris Strolia-Davis Résumé"/>
      </a>
      <h2>Proficiencies</h2>
      <div className="proficiencies">
        <ul>
          <li><h3>Recent</h3>
            <ul>
              <li>Node JS, express, knex, Deno, Typescript, Postgres, redis, elasticsearch, Docker, nginx,
                Lerna, Swagger, yarn, make, mocha, jest, sinon, chai, eslint, babel, git, gitlab (including gitlab ci),
                github, bitbucket, jira, confluence, Datadog, AWS (S3, EC2, OpenSearch, Cognito, IAM), React, Vue (+
                vuex), Handlebars, HTML, CSS, JavaScript, SQL
              </li>
            </ul>
          </li>
          <li><h3>Additional</h3>
            <ul>
              <li>C#, VB.Net, ASP.Net, Linq, Entity Framework, jQuery, XML, XSLT, XPath, XSD, MS Access,
                SQL Server, Oracle, IBM DB2, Teradata, MySQL, Mongo, Raven, MS Excel, Crystal Reports (Business
                Objects), SQL Server Reporting Services (SSRS), SQL Server Integration Services (SSIS), Data
                Transformation Services (DTS), Team Foundation Services (TFS), Subversion, CVS, MS Build, Exchange Web
                Services (EWS), Java, Spring Framework, knockout JS, grunt, gulp, webpack, rollup, browserify, Angular
                JS, ... and more I’ve forgotten about.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
