function ResumeH() {
  return (
<>
    <h2 className="resumeTitle">My Resume</h2>
        <div className="Proficiencies">
          <section className="frontEnd">
            <h4>Front-end Proficiencies:</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
          </section>

          <section className="backEnd">
            <h4>Back-end Proficiencies:</h4>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
          </section>
        </div>

        <a id='clickable' className="downloadLink" href="src/assets/Resume.pdf" download>Click here to download my resume PDF</a>
</>
  );
};

export default ResumeH;