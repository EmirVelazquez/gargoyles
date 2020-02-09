import React, { Component } from "react";
import Nav from "./components/Nav";
import GargoyleCard from "./components/GargoyleCard";
import gargoyles from "./gargoyles.json";
import CardContainer from "./components/CardContainer";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

// Durstenfeld shuffle helper function to get a random order of gargoyles displayed
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
    gargoyles, // getting the json data of the gargoyles.json data array
    wasClicked: [], // Flag state, it holds the cards that have already been clicked
    score: 0, // Flag state to keep track of the current score
    topScore: 1, // Flag state being used to update the all time highest score
    allTimeHighScore: 0 // Flag state being used to display the all time highest score
  };

  // This method handles the state changes
  startGame = gargoyleId => {
    // If statement to search the wasClicked array to see if the gargoyle.id is in the array already
    if (this.state.wasClicked.includes(gargoyleId)) {
      // If true, set the states back to the default beginning states (except for the allTimeHighScore)
      this.setState({
        wasClicked: [],
        score: 0,
        topScore: 1
      });
    } else {
      // If false, push the gargoyle.id into the wasClicked array
      this.state.wasClicked.push(gargoyleId);
      // Set the state for display purposes
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.topScore + 1
      });
      // If statement to update the Top Score accordingly and only do it when the top score has been surpassed
      if (
        this.state.topScore >= 0 &&
        this.state.topScore > this.state.allTimeHighScore
      ) {
        this.setState({
          allTimeHighScore: this.state.topScore
        });
      }
    }
  };

  render() {
    // This is going to shuffle the gargoyles.json into a random order everysingle time
    const shuffledGargoyles = shuffleArray(this.state.gargoyles);
    return (
      <div id="mainContainer">
        <Nav
          currentScore={this.state.score} // Passing props for the current score display
          highestScore={this.state.allTimeHighScore} // Passing props for the top score display
        />
        <Banner />
        <div className="container-fluid" id="backGroundContainer">
          <div className="row" id="mainContent">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <CardContainer>
                {/* Mapping through the shuffled 'deck' and passing props to the gargoyle cards */}
                {shuffledGargoyles.map(gargoyle => (
                  <GargoyleCard
                    key={gargoyle.id}
                    id={gargoyle.id}
                    image={gargoyle.image}
                    name={gargoyle.name}
                    role={gargoyle.role}
                    // This will start the game when an image is clicked
                    onImgClick={() => this.startGame(gargoyle.id)}
                  />
                ))}
              </CardContainer>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
