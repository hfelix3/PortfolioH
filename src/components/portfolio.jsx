function PortfolioH(prop) {
    return (
      <div>
        <h2 class="portfolio">Portfolio</h2>
        <div class="portfolioImages">
        <section class ='leftSide'>
        <h3>svg-logo-generator</h3>
          <img class= "applications" src='src/assets/images/svggenerator.png' onclick="openLink1(https://github.com/hfelix3/svg-logo-generator); openLink2();"/>
          <script>
            {/* WILL THESE FUNCTIONS WORK WITHIN THIS TOP FUNCTION? */}
            {/* function openLink1() {
              window.open("link here");
            }

            function openLink2() {
              window.open("link here");
            } */}
          </script>
          <h3>Just another text editor</h3>
          <img class= "applications" src='src/assets/images/jate.png' href="https://github.com/hfelix3/LineWriter"/>
          <h3>NetworkCalls</h3>
          <img class= "applications" src='src/assets/images/networkcalls.png'/>
        </section>
        <section class ='rightSide'>
        <h3>IronBlog</h3>
          <img class= "applications" src='src/assets/images/ironblog.png'/>
          <h3>PlanIt</h3>
          <img class= "applications" src='src/assets/images/planit.png'/>
          <h3>Jenesaispasthepassgen</h3>
          <img class= "applications" src='src/assets/images/jenesaispasthepassgen.png'/>
        </section>
        </div>
      </div>
    );
}

export default PortfolioH;