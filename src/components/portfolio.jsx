function PortfolioH(prop) {
  return (
    <div>
      <h2 className="portfolio">Portfolio</h2>
      <div className="portfolioImages">
        <section className="leftSide">
          <a href="https://github.com/hfelix3/svg-logo-generator"> {/*CHECK ON HAVING FUNCTIONING IMAGES TAKING YOU TO THE APP OR PAGE*/}
            <h3>svg-logo-generator Repository</h3>
          </a>
          <a href="">
            <img
              className="applications"
              src="src/assets/images/svggenerator.png"
              onclick="openLink1(https://github.com/hfelix3/svg-logo-generator); openLink2();"
              alt="svg-logo-generator"
            />
          </a>
          <script>
            {/* WILL THESE FUNCTIONS WORK WITHIN THIS TOP FUNCTION? */}
            {/* function openLink1() {
              window.open("link here");
            }

            function openLink2() {
              window.open("link here");
            } */}
          </script>
          <a href="https://github.com/hfelix3/LineWriter">
            <h3>Just another text editor Repository</h3>
          </a>
          <a href="">
            <img
              className="applications"
              src="src/assets/images/jate.png"
              alt="Just another text editor"
            />
          </a>
          <a href="https://github.com/hfelix3/NetworkCalls">
            <h3>NetworkCalls Repository</h3>
          </a>
          <a href="">
            <img
              className="applications"
              src="src/assets/images/networkcalls.png"
              alt="NetworkCalls"
            />
          </a>
        </section>
        <section className="rightSide">
          <a href="https://github.com/hfelix3/ironblog">
            <h3>IronBlog Repository</h3>
          </a>
          <a href="https://enigmatic-mesa-07357-505d8360f665.herokuapp.com/">
            <img
              className="applications"
              src="src/assets/images/ironblog.png"
              alt="IronBlog"
            />
          </a>
          <a href="https://github.com/hfelix3/PlanIt">
            <h3>PlanIt Repository</h3>
          </a>
          <a href="https://plan1t-5fa59fd2b161.herokuapp.com/">
            <img
              className="applications"
              src="src/assets/images/planit.png"
              alt="PlanIt"
            />
          </a>
          <a href="https://github.com/hfelix3/jenesaispasthepassgen">
            <h3>Jenesaispasthepassgen Repository</h3>
          </a>
          <a href="">
            <img
              className="applications"
              src="src/assets/images/jenesaispasthepassgen.png"
              alt="Jenesaispasthepassgen"
            />
          </a>
        </section>
      </div>
    </div>
  );
};

export default PortfolioH;
