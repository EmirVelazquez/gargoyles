import React from "react";
import Nav from "./components/Nav";
import GargoyleCard from "./components/GargoyleCard";
import gargoyles from "./gargoyles.json";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div>
      <Nav />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <CardContainer>
              <GargoyleCard
                name={gargoyles[0].name}
                image={gargoyles[0].image}
                role={gargoyles[0].role}
              />
              <GargoyleCard
                name={gargoyles[1].name}
                image={gargoyles[1].image}
                role={gargoyles[1].role}
              />
              <GargoyleCard
                name={gargoyles[2].name}
                image={gargoyles[2].image}
                role={gargoyles[2].role}
              />
              <GargoyleCard
                name={gargoyles[3].name}
                image={gargoyles[3].image}
                role={gargoyles[3].role}
              />
              <GargoyleCard
                name={gargoyles[4].name}
                image={gargoyles[4].image}
                role={gargoyles[4].role}
              />
              <GargoyleCard
                name={gargoyles[5].name}
                image={gargoyles[5].image}
                role={gargoyles[5].role}
              />
              <GargoyleCard
                name={gargoyles[6].name}
                image={gargoyles[6].image}
                role={gargoyles[6].role}
              />
              <GargoyleCard
                name={gargoyles[7].name}
                image={gargoyles[7].image}
                role={gargoyles[7].role}
              />
              <GargoyleCard
                name={gargoyles[8].name}
                image={gargoyles[8].image}
                role={gargoyles[8].role}
              />
              <GargoyleCard
                name={gargoyles[9].name}
                image={gargoyles[9].image}
                role={gargoyles[9].role}
              />
              <GargoyleCard
                name={gargoyles[10].name}
                image={gargoyles[10].image}
                role={gargoyles[10].role}
              />
              <GargoyleCard
                name={gargoyles[11].name}
                image={gargoyles[11].image}
                role={gargoyles[11].role}
              />
            </CardContainer>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
