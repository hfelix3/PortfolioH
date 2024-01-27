function PortfolioH() {
    return (
      <div>
        <h3>Porfolio</h3>
        <section class ='leftSide'>
          <img class= "applications" src='src/assets/images/IMG_0654.JPG' onclick="openLink1(); openLink2();"/>
          <script>
            {/* WILL THESE FUNCTIONS WORK WITHIN THIS TOP FUNCTION? */}
            {/* function openLink1() {
              window.open("link here");
            }

            function openLink2() {
              window.open("link here");
            } */}
          </script>
          <img class= "applications" src='src/assets/images/IMG_0654.JPG'/>
          <img class= "applications" src='src/assets/images/IMG_0654.JPG'/>
        </section>
        <section class ='rightSide'>
          <img class= "applications" src='src/assets/images/IMG_0654.JPG'/>
          <img class= "applications" src='src/assets/images/IMG_0654.JPG'/>
          <img class= "applications" src='src/assets/images/IMG_0654.JPG'/>
        </section>
      </div>
    );
}

export default PortfolioH;