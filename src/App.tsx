import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import Filters from "./components/Filters";
import Footer from "./components/Footer";

export interface bikeType {
  name: string;
  price: number;
  gender?: string;
  brand?: string;
  image: string;
}

function App() {
  const [allBikes, setAllBikes] = useState<bikeType[]>([]);
  const [filteredBikes, setFilteredBikes] = useState<bikeType[]>([]);

  const showAll = () => {
    setFilteredBikes(allBikes);
  };

  const applyFilter = (filterType: string, filterValue: string) => {
    const filteredArr = allBikes.filter((card: any) => {
      return card[filterType] === filterValue;
    });

    setFilteredBikes(filteredArr);
  };

  const countCards = (filterType: string, filterValue: string) => {
    return allBikes.filter((card: any) => card[filterType] === filterValue)
      .length;
  };

  useEffect(() => {
    fetch("https://challenges.brainster.tech/ajax_data/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBikes(data.products);
      });
  }, []);

  return (
    <div className="App">
      <Header />

      {/* left side / navigation */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 py-1">
            <p className="bikes d-inline">Bikes</p>
          </div>

          <div className="col-12 col-md-2">
            <div className="row">
              <Filters
                showAll={showAll}
                applyFilter={applyFilter}
                countCards={countCards}
                allBikes={allBikes}
              />
            </div>
          </div>

          {/* right-side / cards */}
          <div className="col-12 col-md-10">
            <div className="row">
              {filteredBikes.length === 0
                ? allBikes.map((card, index) => {
                    return (
                      <Card
                        key={index}
                        name={card.name}
                        price={card.price}
                        image={card.image}
                      />
                    );
                  })
                : filteredBikes.map((card, index) => {
                    return (
                      <Card
                        key={index}
                        name={card.name}
                        price={card.price}
                        image={card.image}
                      />
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
