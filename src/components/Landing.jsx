import Banner from "./Banner";
import PremiumSelection from "./PremiumSelection";
import NatureElement from "./NatureElement";
import WithUs from "./WithUs";
import Footer from "./Footer";
import Awards from "./Awards";
import Blog from "./Blog";
import Testimonials from "./Testimonials";
import Subscribe from "./Subscribe";
import FAQ from "./FAQ";
import Nav from "./Nav";
import Offers from "./Offers";

const Landing = () => {
  return (
    <>
      <Offers/>
      <Nav />
      <Banner />
      <NatureElement />
      <PremiumSelection />
      <WithUs />
      <Awards />
      <Blog />
      <Testimonials />
      <Subscribe />
      <FAQ />
      <Footer />
    </>
  );
};
export default Landing;
