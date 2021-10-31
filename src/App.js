import PreNavbar from "./components/PreNavbar.js";
import Navbar from "./components/Navbar.js";
import Slider from "./components/Slider.js";
import Offer from "./components/Offer.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { banner } from "./data/Data.json";
import data from "./data/Data.json";
import Heading from "./components/Heading.js";
import StarProduct from "./components/StarProduct.js";
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js";
import HotAccessories from "./components/HotAccessorries.js";
import ProductReviews from "./components/ProductReviews.js";
import Videos from "./components/Videos.js";
import Banner from "./components/Banner.js";
import Footer from "./components/Footer.js";
import NavOption from "./components/NavOption.js";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOption
        miphones={data.miPhones}
        redmiphones={data.redmiPhones}
        tv={data.tv}
        laptop={data.laptop}
        audio={data.audio}
        home={data.home}
        accessroies={data.accessories}
        fitnessLifestyle={data.fitnessAndLifeStyle}
      />
      <Slider start={banner.start} />
      <Offer offer={data.offer} />
      <Heading text="STAR PRODUCTS" />
      <StarProduct StarProduct={data.starProduct} />
      <Heading text="HOT ACCESSORIES " />
      <HotAccessoriesMenu />
      <Route exact path="/music">
        <HotAccessories
          music={data.hotAccessories.music}
          musicCover={data.hotAccessoriesCover.music}
        />
      </Route>
      <Route exact path="/smartdevices">
        <HotAccessories
          smartDevice={data.hotAccessories.smartDevice}
          smartDeviceCover={data.hotAccessoriesCover.smartDevice}
        />
      </Route>
      <Route exact path="/home">
        <HotAccessories
          home={data.hotAccessories.home}
          homeCover={data.hotAccessoriesCover.home}
        />
      </Route>
      <Route exact path="/lifestyle">
        <HotAccessories
          lifeStyle={data.hotAccessories.lifeStyle}
          lifeStyleCover={data.hotAccessoriesCover.lifeStyle}
        />
      </Route>
      <Route exact path="/mobileaccessories">
        <HotAccessories
          mobileAccessories={data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}
        />
      </Route>
      <Heading text="REVIEW PRODUCTS" />
      <ProductReviews productReviews={data.productReviews} />
      <Heading text="VIDEOS" />
      <Videos video={data.videos} />
      <Heading text="IN THE PRESS" />
      <Banner banner={data.banner} />
      <Footer Footer={data.footer} />
    </Router>
  );
}

export default App;
