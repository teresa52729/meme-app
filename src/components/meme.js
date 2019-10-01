import React from "react";

class Meme extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: false
    };
  }
  render() {
    return (
      <div>
        <header className="App-header">
          <p>Meme Component</p>
        </header>
      </div>
    );
  }
}

export default Meme;
