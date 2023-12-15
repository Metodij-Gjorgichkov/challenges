import React from "react";
import Place from "./Place";

interface cardType {
  id: number;
  place: string;
  desc: string;
  img: string;
}

interface State {
  cards: cardType[];
}
class PlacesContainer extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      cards: [],
    };
  }

  componentDidMount(): void {
    fetch("https://react-01-api.onrender.com/places")
      .then((res) => res.json())
      .then((data: cardType[]) => {
        this.setState({ cards: data });
        console.log(data);
      })
      .catch((error) => {
        console.log("Error fetchind data:", error);
      });
  }

  render() {
    return (
      <div className="flex-card">
        {this.state.cards.map((card) => (
          <Place
            key={card.id}
            img={card.img}
            place={card.place}
            desc={card.desc}
          />
        ))}
      </div>
    );
  }
}

export default PlacesContainer;
