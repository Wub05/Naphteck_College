import COCTraining from "./components/COCTraining";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/Homepage";
import Services from "./components/Services";
import StartNow from "./components/StartNow.jsx";
import WhyUs from "./components/WhyUs.jsx";
import FAQ from "./components/FAQ.jsx";
import Language from "./components/Language.jsx";
import ContactUs from "./components/ContactUs.jsx";
import SuccessStories from "./components/SuccessStories.jsx";
import Healthcare from "./components/Healthcare.jsx";

const App = () => {
  return (
    <>
      <Header />
      <HomePage />
      <COCTraining />
      <Services />
      <Healthcare />
      <SuccessStories />
      <WhyUs />
      <StartNow />
      <Language />
      <FAQ />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
