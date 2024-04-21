import Banner from "../Parts/HomeParts/Banner/Banner";
import Gallery from "../Parts/HomeParts/Gallery/Gallery";
import Recipes from "../Parts/HomeParts/Recipes/Recipes";
import Subscribe from "../Parts/HomeParts/Subscribe";

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Recipes></Recipes>
   <Gallery></Gallery>
   <Subscribe></Subscribe>
      
    </div>
  );
}

export default Home;
