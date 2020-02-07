import React, { Component } from "react";
import Nav from "./components/Nav";
import GargoyleCard from "./components/GargoyleCard";
import gargoyles from "./gargoyles.json";
import CardContainer from "./components/CardContainer";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

// Durstenfeld shuffle function to get a random order of gargoyles displayed
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

class App extends Component {
  state = {
    gargoyles,
    score: 5,
    topScore: 7
  };

  render() {
    const shuffledGargoyles = shuffleArray(this.state.gargoyles);
    return (
      <React.Fragment>
        <Nav totalScore={this.state.score} highScore={this.state.topScore} />
        <Banner />
        <div className="container-fluid" id="mainContainer">
          <div className="row" id="mainContent">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <CardContainer>
                {shuffledGargoyles.map(gargoyle => (
                  <GargoyleCard
                    key={gargoyle.id}
                    gargoyles={gargoyle}
                    image={gargoyle.image}
                    name={gargoyle.name}
                    role={gargoyle.role}
                  />
                ))}
              </CardContainer>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
