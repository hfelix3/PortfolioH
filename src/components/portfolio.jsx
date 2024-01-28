function PortfolioH(prop) {
    return (
      <div>
        <h2 class="portfolio">Porfolio</h2>
        <div class="portfolioImages">
        <section class ='leftSide'>
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
          <img class= "applications" src='src/assets/images/jate.png' href="https://github.com/hfelix3/LineWriter"/>
          <img class= "applications" src='src/assets/images/networkcalls.png'/>
        </section>
        <section class ='rightSide'>
          <img class= "applications" src='src/assets/images/ironblog.png'/>
          <img class= "applications" src='src/assets/images/planit.png'/>
          <img class= "applications" src='src/assets/images/jenesaispasthepassgen.png'/>
        </section>
        </div>
      </div>
    );
}

export default PortfolioH;