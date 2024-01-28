function ResumeH(prop) {
    return (
      <div>
        <h2 class="resumeTitle">My Resume</h2>
        <div class="Proficiencies">
          <section class="frontEnd">
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

          <section class="backEnd">
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

        <a class="downloadLink" src="" download>Click here to download my resume</a>

      </div>
    );
}

export default ResumeH;