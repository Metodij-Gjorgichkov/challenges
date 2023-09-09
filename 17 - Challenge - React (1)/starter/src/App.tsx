import "./css/main.scss";
import Banner from "./components/Banner";
import Detailsblock from "./components/Detailsblock";
import Footer from "./components/Footer";
import PlacesContainer from "./components/PlacesContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Banner />
      <Detailsblock
        title="Stories of Adventure"
        imageSrc="https://picsum.photos/seed/picsum/400/400"
      />
      <PlacesContainer />
      <Detailsblock
        title="Popular Adventures"
        imageSrc="https://picsum.photos/id/237/400/400"
      />
      <Footer destinations="Destination" contact="Contact" stories="Stories" />
    </div>
  );
};

export default App;
